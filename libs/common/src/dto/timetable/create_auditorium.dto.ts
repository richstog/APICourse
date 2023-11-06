import { ApiProperty } from "@nestjs/swagger"

export class CreateAuditoriumDto {
    @ApiProperty()
    number: number

    @ApiProperty()
    title: string

    @ApiProperty()
    count_seat: boolean

    @ApiProperty()
    count_computer: number

    @ApiProperty()
    ownerTeacherId: number

    @ApiProperty()
    count_week: number
}