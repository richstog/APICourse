import { ApiProperty } from "@nestjs/swagger"

export class CreateSpecialityDto {

    @ApiProperty()
    code: string

    @ApiProperty()
    title: string

    @ApiProperty()
    base: boolean
}