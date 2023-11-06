import { ApiProperty } from "@nestjs/swagger"

export class CreateAccessDto {
    @ApiProperty()
    value: string

    @ApiProperty()
    description: string
}