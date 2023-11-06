import { ApiProperty } from "@nestjs/swagger"

export class CreateDisciplineDto {

    @ApiProperty()
    code: string

    @ApiProperty()
    title: string

    @ApiProperty()
    discipline_type_id: number
}