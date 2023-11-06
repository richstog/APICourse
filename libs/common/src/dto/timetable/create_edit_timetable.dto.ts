import { ApiProperty } from "@nestjs/swagger"

export class CreateEditTimetableDto {

    @ApiProperty()
    full_id: number

    @ApiProperty()
    edit_discipline: number

    @ApiProperty()
    edit_teacher: number

    @ApiProperty()
    edit_auditorium: number
}