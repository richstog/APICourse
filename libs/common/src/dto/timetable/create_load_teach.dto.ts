import { ApiProperty } from "@nestjs/swagger"

export class CreateLoadTeachDto {

    @ApiProperty()
    teacher_id: number

    @ApiProperty()
    group_id: number

    @ApiProperty()
    discipline_id: number

    @ApiProperty()
    load_lecture: number

    @ApiProperty()
    load_practical: number

    @ApiProperty()
    load_subgroup: boolean
}