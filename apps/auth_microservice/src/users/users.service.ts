import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserRoleDto, LoginUserDto, RegistUserDto } from '@app/common';
import { RolesService } from '../roles/roles.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService,
        private jwtService: JwtService
        ) {}

    async registrUser(dto: RegistUserDto) {
        const condidate = await this.getUserByLogin(dto.login);
        if(condidate) {
            throw new HttpException(`A user with this email already exists, ${condidate}`, HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userRepository.create({...dto, password: hashPassword})
        return this.generateToken(user)
    }

    async loginUser(dto: LoginUserDto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user)
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({where: {login}, include: {all: true}})
        return user
    }

    async validateUser(loginUserDto: LoginUserDto) {
        const user = await this.userRepository.findOne({where: {login: loginUserDto.login}})
        if (user) {
            const passwordEquals = await bcrypt.compare(loginUserDto.password, user.password)

            if (passwordEquals) {
                return user
            }
            throw new UnauthorizedException({message: 'Incorrect email or password'})
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
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user) {
            await user.$add('role', role.id)
            return dto
        }
        throw new HttpException('User or role is not defined', HttpStatus.BAD_REQUEST)
    }
}
