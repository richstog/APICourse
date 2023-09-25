import { IsEmail, IsString, Max, Min } from "class-validator"

export class RegistUserDto {

    @IsString()
    surname: string

    @IsString()
    name: string

    @IsString()
    middlename: string

    @Min(6)
    @Max(20)
    @IsString()
    login: string

    @IsEmail()
    email?: string

    @IsString()
    password: string

    
    phone?: string
}