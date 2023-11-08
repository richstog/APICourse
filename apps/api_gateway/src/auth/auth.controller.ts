import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccessDto, CreateRoleDto, CreateStudentDto, CreateTeacherDto, CreateUserAccessDto, CreateUserRoleDto, LoginUserDto, RegistUserDto, UpdateAccessDto, UpdateRoleDto, UpdateUserDto } from '@app/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'apps/auth_microservice/src/roles/roles.model';
import { User } from 'apps/auth_microservice/src/users/users.model';
import { UsersRoles } from 'apps/auth_microservice/src/users_roles/users_roles.model';
import { UsersAccesses } from 'apps/auth_microservice/src/users_accesses/uses_accesses.model';
import { TimetableMicroserviceService } from 'apps/timetable_microservice/src/timetable_microservice.service';
import { TimetableService } from '../timetable/timetable.service';
import { Access } from 'apps/auth_microservice/src/accesses/accesses.model';
import { create } from 'domain';
import { KafkaMessage } from 'kafkajs';

interface UUU {
    id
}

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly timetableService: TimetableService
        ) {}


    @ApiTags('User')
    @ApiOperation({summary: 'Регистрация user'})
    @ApiResponse({status: 200, type: User})
    @Post('/user/registr')
    async registrUser(@Body() dto: RegistUserDto) {
        return await this.authService.registrUser(dto)
        
        
        //console.log(JSON.parse(created_user))
        // let tt_user = {}
        // if (dto.roleValue === 'STUDENT') {
        //     console.log('Я СТУДЕНТ')
        //     const timetable_service_user: CreateStudentDto = {
        //         surname: dto.surname,
        //         name: dto.name,
        //         middle_name: dto.middlename,
        //         userId: 678,
        //         group_id: dto.groupId
        //     }
        //     tt_user = await this.timetableService.createStudent(timetable_service_user)
        // }
        // else if (dto.roleValue === 'TEACHER') {
        //     const timetable_service_user: CreateTeacherDto = {
        //         surname: dto.surname,
        //         name: dto.name,
        //         middle_name: dto.middlename,
        //         userId: created_user['id']
        //     }
        //     tt_user = await this.timetableService.createTeacher(timetable_service_user)
        // }
        // else {
        //     console.log('Ошибка непонятия')
        // }
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Вход user'})
    @ApiResponse({status: 200, type: User})
    @Post('/user/login')
    async loginUser(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.loginUser(loginUserDto)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Удалить user'})
    @ApiResponse({status: 200, type: User})
    @Delete('/user:id')
    async deleteUser(@Param('id') id: number) {
        return await this.authService.deleteUser(id)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Получить user по логину'})
    @ApiResponse({status: 200, type: User})
    @Get('/user/:login')
    async getUserByLogin(@Param('login') login: string) {
        return await this.authService.getUserByLogin(login)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Получить всех user'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/user')
    async allUsers() {
        return await this.authService.allUsers()
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Редактировать user'})
    @ApiResponse({status: 200, type: User})
    @Put('/user')
    async updateUser(@Body() updateUserDto: UpdateUserDto) {
        return await this.authService.updateUser(updateUserDto)
    }

    // UserRole
    @ApiTags('UserRole')
    @ApiOperation({summary: 'Добавить роль пользователю'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Post('/user/role')
    async addRoleToUser(@Body() dto: CreateUserRoleDto) {
        return await this.authService.addRoleToUser(dto)
    }

    @ApiTags('UserRole')
    @ApiOperation({summary: 'Удалить роль пользователя'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Delete('/user/role')
    async deleteRoleToUser(@Body() dto: CreateUserRoleDto) {
        return await this.authService.deleteRoleToUser(dto)
    }

    // Roles

    @ApiTags('Role')
    @ApiOperation({summary: 'Получить всех role'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/role')
    async allRole() {
    	return await this.authService.allRole()
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Получить role'})
    @ApiResponse({status: 200, type: Role})
    @Get('/role/:id')
    async oneRole(@Param('id') id: number) {
    	return await this.authService.oneRole(id)
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Создать role'})
    @ApiResponse({status: 200, type: Role})
    @Post('/role')
    async createRole(@Body() dto: CreateRoleDto) {
    	return await this.authService.createRole(dto)
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Изменить role'})
    @ApiResponse({status: 200, type: Role})
    @Put('/role')
    async updateRole(@Body() dto: UpdateRoleDto) {
    	return await this.authService.updateRole(dto)
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Удалить role'})
    @ApiResponse({status: 200, type: Role})
    @Delete('/role/:id')
    async deleteRole(@Param('id') id: number) {
    	return await this.authService.deleteRole(id)
    }

    // UserAccess
    @ApiTags('UserRole')
    @ApiOperation({summary: 'Добавить роль пользователю'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Post('/user/role')
    async addAccessToUser(dto: CreateUserAccessDto) {
        return await this.authService.addAccessToUser(dto)
    }

    @ApiTags('UserRole')
    @ApiOperation({summary: 'Удалить роль пользователя'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Delete('/user/role')
    async deleteAccessToUser(dto: CreateUserAccessDto) {
        return await this.authService.deleteAccessToUser(dto)
    }

    // Accesses
    @ApiTags('Access')
    @ApiOperation({summary: 'Получить всех access'})
    @ApiResponse({status: 200, type: [Access]})
    @Get('/access')
    async allAccess() {
    	return await this.authService.allAccess()
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Получить access'})
    @ApiResponse({status: 200, type: Access})
    @Get('/access/:id')
    async oneAccess(@Param('id') id: number) {
    	return await this.authService.oneAccess(id)
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Создать access'})
    @ApiResponse({status: 200, type: Access})
    @Post('/access')
    async createAccess(@Body() dto: CreateAccessDto) {
    	return await this.authService.createAccess(dto)
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Изменить access'})
    @ApiResponse({status: 200, type: Access})
    @Put('/access')
    async updateAccess(@Body() dto: UpdateAccessDto) {
    	return await this.authService.updateAccess(dto)
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Удалить access'})
    @ApiResponse({status: 200, type: Access})
    @Delete('/access/:id')
    async deleteAccess(@Param('id') id: number) {
    	return await this.authService.deleteAccess(id)
    }
}
