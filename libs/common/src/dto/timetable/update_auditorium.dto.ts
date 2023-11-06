import { ApiProperty } from "@nestjs/swagger"

export class UpdateAuditoriumDto {
    @ApiProperty()
    id: number
    
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