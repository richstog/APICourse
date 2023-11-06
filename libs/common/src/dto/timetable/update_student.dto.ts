import { ApiProperty } from "@nestjs/swagger"

export class UpdateStudentDto {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    userId: number

    @ApiProperty()
    name: string

    @ApiProperty()
    surname: string

    @ApiProperty()
    middle_name: string

    @ApiProperty()
    group_id: number
}