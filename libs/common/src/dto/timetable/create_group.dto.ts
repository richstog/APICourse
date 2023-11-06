import { ApiProperty } from "@nestjs/swagger"

export class CreateGroupDto {

    @ApiProperty()
    number: string

    @ApiProperty()
    mentor_teacher_id: number
    
    @ApiProperty()
    spec_id: number
}