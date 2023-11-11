import { ApiProperty } from "@nestjs/swagger"

export class UpdateAuditoriumDto {
    @ApiProperty()
    id: number
    
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