import { ApiProperty } from "@nestjs/swagger"

export class UpdateDisciplineTypeDto {

    @ApiProperty()
    id: number
    
    @ApiProperty()
    title: string

    @ApiProperty()
    abbreviation: string
}