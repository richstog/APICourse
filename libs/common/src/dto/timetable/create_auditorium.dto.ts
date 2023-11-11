import { ApiProperty } from "@nestjs/swagger"

export class CreateAuditoriumDto {
    @ApiProperty()
    number: number

    @ApiProperty()
    title: string

    @ApiProperty()
    count_seat: number

    @ApiProperty()
    count_computer: number

    @ApiProperty()
    ownerTeacherId: number
}