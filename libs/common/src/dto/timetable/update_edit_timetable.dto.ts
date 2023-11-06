import { ApiProperty } from "@nestjs/swagger"

export class UpdateEditTimetableDto {

    @ApiProperty()
    id: number
    
    @ApiProperty()
    full_id: number

    @ApiProperty()
    edit_discipline: number

    @ApiProperty()
    edit_teacher: number

    @ApiProperty()
    edit_auditorium: number
}