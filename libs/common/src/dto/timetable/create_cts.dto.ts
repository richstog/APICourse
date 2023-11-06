import { ApiProperty } from "@nestjs/swagger"

export class CreateCTSDto {
    @ApiProperty()
    specId: number

    @ApiProperty()
    course: string
    
    @ApiProperty()
    semestr: boolean
    
    @ApiProperty()
    discipline_type_id: number
    
    @ApiProperty()
    date_start: string

    @ApiProperty()
    count_week: number
}