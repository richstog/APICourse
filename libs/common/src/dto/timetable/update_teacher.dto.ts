import { ApiProperty } from "@nestjs/swagger"

export class UpdateTeacherDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    surname: string

    @ApiProperty()
    middle_name: string
}