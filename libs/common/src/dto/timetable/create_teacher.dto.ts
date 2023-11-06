import { ApiProperty } from "@nestjs/swagger"

export class CreateTeacherDto {

    @ApiProperty()
    userId: number

    @ApiProperty()
    name: string

    @ApiProperty()
    surname: string

    @ApiProperty()
    middle_name: string
}