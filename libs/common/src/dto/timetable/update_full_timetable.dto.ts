import { ApiProperty } from "@nestjs/swagger"

export class UpdateFullTimetableDto {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    full_date: string

    @ApiProperty()
    maket_id: number
}