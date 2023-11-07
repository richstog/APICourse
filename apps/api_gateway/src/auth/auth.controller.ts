import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccessDto, CreateRoleDto, CreateUserAccessDto, CreateUserRoleDto, LoginUserDto, RegistUserDto, UpdateAccessDto, UpdateRoleDto, UpdateUserDto } from '@app/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'apps/auth_microservice/src/roles/roles.model';
import { User } from 'apps/auth_microservice/src/users/users.model';
import { UsersRoles } from 'apps/auth_microservice/src/users_roles/users_roles.model';
import { UsersAccesses } from 'apps/auth_microservice/src/users_accesses/uses_accesses.model';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}


    @ApiTags('User')
    @ApiOperation({summary: 'Регистрация user'})
    @ApiResponse({status: 200, type: User})
    @Post('/user/registr')
    async registrUser(@Body() registrUserDto: RegistUserDto) {
        return this.authService.registrUser(registrUserDto)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Вход user'})
    @ApiResponse({status: 200, type: User})
    @Get('/user/login')
    async loginUser(@Body() loginUserDto: LoginUserDto) {
        this.authService.loginUser(loginUserDto)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Удалить user'})
    @ApiResponse({status: 200, type: User})
    @Delete('/user:id')
    async deleteUser(@Param('id') id: number) {
        this.authService.deleteUser(id)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Получить user по логину'})
    @ApiResponse({status: 200, type: User})
    @Get('/user/:login')
    async getUserByLogin(@Param('login') login: string) {
        this.authService.getUserByLogin(login)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Получить всех user'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/user')
    async allUsers() {
        return this.authService.allUsers()
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Редактировать user'})
    @ApiResponse({status: 200, type: User})
    @Put('/user')
    async updateUser(updateUserDto: UpdateUserDto) {
        return this.authService.updateUser(updateUserDto)
    }

    // UserRole
    @ApiTags('UserRole')
    @ApiOperation({summary: 'Добавить роль пользователю'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Post('/user/role')
    async addRoleToUser(dto: CreateUserRoleDto) {
        this.authService.addRoleToUser(dto)
    }

    @ApiTags('UserRole')
    @ApiOperation({summary: 'Удалить роль пользователя'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Delete('/user/role')
    async deleteRoleToUser(dto: CreateUserRoleDto) {
        this.authService.deleteRoleToUser(dto)
    }

    // Roles

    @ApiTags('Role')
    @ApiOperation({summary: 'Получить всех role'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/role')
    async allRole() {
    	return this.authService.allRole()
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Получить role'})
    @ApiResponse({status: 200, type: Role})
    @Get('/role/:id')
    async oneRole(@Param('id') id: number) {
    	return this.authService.oneRole(id)
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Создать role'})
    @ApiResponse({status: 200, type: Role})
    @Post('/role')
    async createRole(@Body() dto: CreateRoleDto) {
    	return this.authService.createRole(dto)
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Изменить role'})
    @ApiResponse({status: 200, type: Role})
    @Put('/role')
    async updateRole(@Body() dto: UpdateRoleDto) {
    	return this.authService.updateRole(dto)
    }
    @ApiTags('Role')
    @ApiOperation({summary: 'Удалить role'})
    @ApiResponse({status: 200, type: Role})
    @Delete('/role/:id')
    async deleteRole(@Param('id') id: number) {
    	return this.authService.deleteRole(id)
    }

    // UserAccess
    @ApiTags('UserRole')
    @ApiOperation({summary: 'Добавить роль пользователю'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Post('/user/role')
    async addAccessToUser(dto: CreateUserAccessDto) {
        this.authService.addAccessToUser(dto)
    }

    @ApiTags('UserRole')
    @ApiOperation({summary: 'Удалить роль пользователя'})
    @ApiResponse({status: 200, type: UsersRoles})
    @Delete('/user/role')
    async deleteAccessToUser(dto: CreateUserAccessDto) {
        this.authService.deleteAccessToUser(dto)
    }

    // Accesses
    @ApiTags('Access')
    @ApiOperation({summary: 'Получить всех access'})
    @ApiResponse({status: 200, type: [UsersAccesses]})
    @Get('/access')
    async allAccess() {
    	return this.authService.allAccess()
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Получить access'})
    @ApiResponse({status: 200, type: UsersAccesses})
    @Get('/access/:id')
    async oneAccess(@Param('id') id: number) {
    	return this.authService.oneAccess(id)
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Создать access'})
    @ApiResponse({status: 200, type: UsersAccesses})
    @Post('/access')
    async createAccess(@Body() dto: CreateAccessDto) {
    	return this.authService.createAccess(dto)
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Изменить access'})
    @ApiResponse({status: 200, type: UsersAccesses})
    @Put('/access')
    async updateAccess(@Body() dto: UpdateAccessDto) {
    	return this.authService.updateAccess(dto)
    }
    @ApiTags('Access')
    @ApiOperation({summary: 'Удалить access'})
    @ApiResponse({status: 200, type: UsersAccesses})
    @Delete('/access/:id')
    async deleteAccess(@Param('id') id: number) {
    	return this.authService.deleteAccess(id)
    }
}
