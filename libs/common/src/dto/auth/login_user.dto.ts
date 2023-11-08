import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class LoginUserDto {

    @ApiProperty()
    login: string

    @ApiProperty()
    password: string
}