import { ApiProperty } from "@nestjs/swagger"

export class CreateFullTimetableDto {
    
    @ApiProperty()
    full_date: string

    @ApiProperty()
    maket_id: number
}