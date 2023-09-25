import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegistUserDto } from '@app/common';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}


    @Post()
    registrUser(@Body() registrUserDto: RegistUserDto) {
        return this.authService.registrUser(registrUserDto)
    }

    @Get()
    loginUser(@Body() loginUserDto: LoginUserDto) {
        this.authService.loginUser(loginUserDto)
    }

    @Delete()
    deleteUser() {
        this.authService.deleteUser()
    }
}
