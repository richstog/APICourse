import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { LoginUserDto, RegistUserDto, UpdateUserDto } from '@app/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @MessagePattern('registr_user')
    async registrUser(registUserDto: RegistUserDto) {
        const user = await this.usersService.registrUser(registUserDto)
        return JSON.stringify(user)
    }

    @MessagePattern('login_user')
    async loginUser(loginUserDto: LoginUserDto) {
        return this.usersService.loginUser(loginUserDto)
    }

    @MessagePattern('all_user')
    async getUsers() {
        const users = this.usersService.getAllUsers()
        return JSON.stringify(users)
    }

    @MessagePattern('get_user_by_login')
    async getUserByLogin(login: string) {
        const user = this.usersService.getUserByLogin(login)
        return JSON.stringify(user)
    }

    @MessagePattern('delete_user')
    async deleteLogin(id: number) {
        const user = this.usersService.deleteUser(id)
        return JSON.stringify(user)
    }

    @MessagePattern('update_user')
    async updateUser(dto: UpdateUserDto) {
        const user = this.usersService.updateUser(dto)
    }
}
