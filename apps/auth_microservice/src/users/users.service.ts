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
export class UsersService implements OnModuleInit {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService,
        private jwtService: JwtService,
        private accessService: AccessesService,
        @Inject('TIMETABLE_MICROSERVICE') private readonly timetableClient: ClientKafka
        ) {}
        async onModuleInit() {
            const events = [
                'all_auditorium',
                'one_auditorium',
                'create_auditorium',
                'update_auditorium',
                'delete_auditorium',
                'all_cts',
                'one_cts',
                'create_cts',
                'update_cts',
                'delete_cts',
                'all_disciplineType',
                'one_disciplineType',
                'create_disciplineType',
                'update_disciplineType',
                'delete_disciplineType',
                'all_discipline',
                'one_discipline',
                'create_discipline',
                'update_discipline',
                'delete_discipline',
                'all_editTimetable',
                'one_editTimetable',
                'create_editTimetable',
                'update_editTimetable',
                'delete_editTimetable',
                'all_fullTimetable',
                'one_fullTimetable',
                'create_fullTimetable',
                'update_fullTimetable',
                'delete_fullTimetable',
                'all_group',
                'one_group',
                'create_group',
                'update_group',
                'delete_group',
                'all_loadTeach',
                'one_loadTeach',
                'create_loadTeach',
                'update_loadTeach',
                'delete_loadTeach',
                'all_maketTimetable',
                'one_maketTimetable',
                'create_maketTimetable',
                'update_maketTimetable',
                'delete_maketTimetable',
                'all_speciality',
                'one_speciality',
                'create_speciality',
                'update_speciality',
                'delete_speciality',
                'all_student',
                'one_student',
                'create_student',
                'update_student',
                'delete_student',
                'all_teacher',
                'one_teacher',
                'create_teacher',
                'update_teacher',
                'delete_teacher',
                'create_user'
            ];
        
            await Promise.all(
                events.map(event => this.timetableClient.subscribeToResponseOf(event))
            );
        
            await this.timetableClient.connect();
        }

    async registrUser(dto: RegistUserDto) {

        console.log(dto)

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
        //const token = this.loginUser({login: dto.login, password: dto.password})
        
        return user

        //return this.timetableClient.send('all_auditorium', {})
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
            await user.$add('role', role.id)
            user.save()
            return dto
        }
        throw new HttpException('User or role is not defined', HttpStatus.BAD_REQUEST)
    }

    async addAccess(dto: CreateUserAccessDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const access = await this.accessService.oneAccess(dto.accessId)
        if (access && user) {
            await user.$add('access', access.id)
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
