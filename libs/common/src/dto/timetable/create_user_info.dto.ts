import { ApiProperty } from "@nestjs/swagger"

export class CreateUserInfoDto {

    @ApiProperty()
    userId: number

    @ApiProperty()
    name: string

    @ApiProperty()
    surname: string

    @ApiProperty()
    middle_name: string

    @ApiProperty()
    roleValue: string

    @ApiProperty()
    groupId?: number
}