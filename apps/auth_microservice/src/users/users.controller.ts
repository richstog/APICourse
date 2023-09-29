import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { LoginUserDto, RegistUserDto } from '@app/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @MessagePattern('registr_user')
    async registrUser(registUserDto: RegistUserDto) {
        const user = await this.usersService.registrUser(registUserDto)
        return user
    }

    @MessagePattern('login_user')
    async loginUser(loginUserDto: LoginUserDto) {
        
    }
}
