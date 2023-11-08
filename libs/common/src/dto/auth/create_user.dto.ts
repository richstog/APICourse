import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Max, Min } from "class-validator"

export class CreateUserDto {
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

    @ApiProperty()
    @IsString()
    roleValue
}