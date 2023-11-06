import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDto {
    
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