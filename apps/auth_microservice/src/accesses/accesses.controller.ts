import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AccessesService } from './accesses.service';
import { CreateAccessDto, UpdateAccessDto } from '@app/common';

@Controller('accesses')
export class AccesssController {

    constructor(private readonly accessesService: AccessesService) {}

    @MessagePattern('all_access')
    async allAccess() {
        const accesses = await this.accessesService.allAccesss()
        return accesses
    }

    @MessagePattern('one_access')
    async oneAccess(id: number) {
        const access = await this.accessesService.oneAccess(id)
        return access
    }

    @MessagePattern('create_access')
    async createAccess(dto: CreateAccessDto) {
        const access = await this.accessesService.createAccess(dto)
        return access
    }

    @MessagePattern('update_access')
    async updateAccess(dto: UpdateAccessDto) {
        const access = await this.accessesService.updateAccess(dto)
        return access
    }

    @MessagePattern('delete_access')
    async deleteAccess(id: number) {
        const access = await this.accessesService.deleteAccess(id)
        return access
    }
}
