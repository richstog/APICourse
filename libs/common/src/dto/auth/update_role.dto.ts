import { ApiProperty } from "@nestjs/swagger"

export class UpdateRoleDto {

    @ApiProperty()
    id: number

    @ApiProperty()
    value: string

    @ApiProperty()
    description: string
}