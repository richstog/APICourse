import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserRoleDto, LoginUserDto, RegistUserDto } from '@app/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}


    @ApiTags('User')
    @ApiOperation({summary: 'Регистрация user'})
    @Post('/user/registr')
    async registrUser(@Body() registrUserDto: RegistUserDto) {
        return this.authService.registrUser(registrUserDto)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Вход user'})
    @Get('/user/login')
    async loginUser(@Body() loginUserDto: LoginUserDto) {
        this.authService.loginUser(loginUserDto)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Удалить user'})
    @Delete('/user:id')
    async deleteUser(@Param('id') id: number) {
        this.authService.deleteUser(id)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Получить user по логину'})
    @Get('/user/:login')
    async getUserByLogin(@Param('login') login: string) {
        this.authService.getUserByLogin(login)
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Удалить user'})
    @Get('/user')
    async allUsers() {
        return this.authService.allUsers()
    }

    @ApiTags('User')
    @ApiOperation({summary: 'Редактировать user'})
    @Get('/user')
    async updateUser() {
        return this.authService.updateUser()
    }

    // UserRole
    @ApiTags('UserRole')
    @ApiOperation({summary: 'Добавить роль пользователю'})
    @Get('/user/role')
    async addRoleToUser(createUserRoleDto: CreateUserRoleDto) {
        this.authService.addRoleToUser(createUserRoleDto)
    }

    @ApiTags('UserRole')
    @ApiOperation({summary: 'Удалить роль пользователя'})
    @Get('/user/role')
    async deleteRoleToUser(createUserRoleDto: CreateUserRoleDto) {
        this.authService.deleteRoleToUser(createUserRoleDto)
    }


}
