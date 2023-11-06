import { ApiProperty } from "@nestjs/swagger"

export class UpdateDisciplineDto {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    code: string

    @ApiProperty()
    title: string

    @ApiProperty()
    discipline_type_id: number
}