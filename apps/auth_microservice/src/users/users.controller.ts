import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserAccessDto, CreateUserDto, CreateUserRoleDto, LoginUserDto, RegistUserDto, UpdateUserDto } from '@app/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @MessagePattern('registr_user')
    async registrUser(dto: RegistUserDto) {
        console.log(dto)
        const token = await this.usersService.registrUser(dto)
        return JSON.stringify(token)
    }

    @MessagePattern('login_user')
    async loginUser(loginUserDto: LoginUserDto) {
        const token = await this.usersService.loginUser(loginUserDto)
        return token
    }

    @MessagePattern('all_user')
    async getUsers() {
        return await this.usersService.getAllUsers()
    }

    @MessagePattern('get_user_by_login')
    async getUserByLogin(login: string) {
        return await this.usersService.getUserByLogin(login)
    }

    @MessagePattern('delete_user')
    async deleteLogin(id: number) {
        const user = this.usersService.deleteUser(id)
        return JSON.stringify(user)
    }

    @MessagePattern('update_user')
    async updateUser(dto: UpdateUserDto) {
        const user = this.usersService.updateUser(dto)
        return JSON.stringify(user)
    }

    @MessagePattern('add_user_role')
    async addRole(dto: CreateUserRoleDto) {
        const user = this.usersService.addRole(dto)
        return JSON.stringify(user)
    }

    @MessagePattern('add_user_access')
    async addAccess(dto: CreateUserAccessDto) {
        const user = this.usersService.addAccess(dto)
        return JSON.stringify(user)
    }
}
