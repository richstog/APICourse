import { ApiProperty } from "@nestjs/swagger"

export class CreateDisciplineTypeDto {

    @ApiProperty()
    title: string

    @ApiProperty()
    abbreviation: string
}