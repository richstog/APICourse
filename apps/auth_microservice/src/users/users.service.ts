import { HttpException, HttpStatus, Inject, Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateStudentDto, CreateTeacherDto, CreateUserAccessDto, CreateUserDto, CreateUserInfoDto, CreateUserRoleDto, LoginUserDto, RegistUserDto, UpdateUserDto } from '@app/common';
import { RolesService } from '../roles/roles.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { json } from 'sequelize';
import { AccessesService } from '../accesses/accesses.service';
import { ClientKafka } from '@nestjs/microservices';
import { Role } from '../roles/roles.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService,
        private jwtService: JwtService,
        private accessService: AccessesService,
        ) {}
        

    async registrUser(dto: RegistUserDto) {

        const condidate = JSON.parse(await this.getUserByLogin(dto.login));
        const role = JSON.parse(await this.roleService.getRoleByValue(dto.roleValue))
        if(condidate !== null) {
            throw new HttpException(`A user with this login already exists, ${condidate}`, HttpStatus.BAD_REQUEST)
        } else if (role === null) {
            throw new HttpException(`User role is undefined`, HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userRepository.create({...dto, password: hashPassword})
        await user.$add('roles', [role.id])
        user.roles = [role]
        
        return user
    }

    async loginUser(dto: LoginUserDto) {
        console.log(dto)
        const user = await this.validateUser(dto);
        return this.generateToken(user)
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({where: {login}, include: {all: true}})
        return JSON.stringify(user)
    }

    async validateUser(loginUserDto: LoginUserDto) {
        console.log('Валидация юзера',loginUserDto)
        const user = await this.userRepository.findOne({where: {login: loginUserDto.login}, include: {all: true}})
        if (user) {
            const passwordEquals = await bcrypt.compare(loginUserDto.password, user.password)

            if (passwordEquals) {
                return user
            }
            throw new UnauthorizedException({message: 'Incorrect login or password'})
        }
        
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }

    async generateToken(user: User) {
        const payload = {id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    async addRole(dto: CreateUserRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleById(dto.roleId)
        if (role && user) {
            await user.$add('roles', role.id)
            user.save()
            return dto
        }
        throw new HttpException('User or role is not defined', HttpStatus.BAD_REQUEST)
    }

    async addAccess(dto: CreateUserAccessDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const access = await this.accessService.oneAccess(dto.accessId)
        if (access && user) {
            await user.$add('accesses', access.id)
            
            return dto
        }
        throw new HttpException('User or access is not defined', HttpStatus.BAD_REQUEST)
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.destroy({where: {id}})
        return JSON.stringify(user)
    }

    async updateUser(updateUserDto: UpdateUserDto) {
        const {id, ...data} = updateUserDto
        const user = await this.userRepository.update(
            {...data}, {where: {id}}
        )
        return JSON.stringify(user)
    }
}
