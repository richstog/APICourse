import { ApiProperty } from "@nestjs/swagger"

export class CreateUserAccessDto {
    @ApiProperty()
    userId: number

    @ApiProperty()
    accessId: number
}