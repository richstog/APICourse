import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Max, Min } from "class-validator"

export class RegistUserDto {

    @ApiProperty()
    @IsString()
    surname: string

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    middlename: string

    @ApiProperty()
    @Min(6)
    @Max(20)
    @IsString()
    login: string

    @ApiProperty()
    @IsEmail()
    email?: string

    @ApiProperty()
    @IsString()
    password: string
}