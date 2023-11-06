import { ApiProperty } from "@nestjs/swagger"

export class CreateMaketTimetableDto {
    
    @ApiProperty()
    week: boolean

    @ApiProperty()
    weekday: string

    @ApiProperty()
    subgroup: string

    @ApiProperty()
    group_id: number

    @ApiProperty()
    discipline_id: number

    @ApiProperty()
    teacher_id: number

    @ApiProperty()
    auditorium_id: number
}