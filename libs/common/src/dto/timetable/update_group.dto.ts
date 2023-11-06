import { ApiProperty } from "@nestjs/swagger"

export class UpdateGroupDto {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    number: string

    @ApiProperty()
    mentor_teacher_id: number
    
    @ApiProperty()
    spec_id: number
}