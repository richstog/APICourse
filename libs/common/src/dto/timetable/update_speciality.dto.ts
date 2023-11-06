import { ApiProperty } from "@nestjs/swagger"

export class UpdateSpecialityDto {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    code: string

    @ApiProperty()
    title: string

    @ApiProperty()
    base: boolean
}
