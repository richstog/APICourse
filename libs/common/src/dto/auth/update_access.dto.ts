import { ApiProperty } from "@nestjs/swagger"

export class UpdateAccessDto {

    @ApiProperty()
    id: number

    @ApiProperty()
    value: string

    @ApiProperty()
    description: string
}