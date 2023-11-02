import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CtsService } from './cts.service';
import { CreateCTSDto, UpdateCTSDto } from '@app/common';

@Controller('cts')
export class CtsController {
    constructor(private readonly ctsService: CtsService) {}

    @MessagePattern('all_cts')
    async allCTS() {
        const ctses = await this.ctsService.allCTSes()
        return ctses
    }

    @MessagePattern('one_cts')
    async oneCTS(id: number) {
        const cts = await this.ctsService.oneCTS(id)
        return cts
    }

    @MessagePattern('create_cts')
    async createCTS(dto: CreateCTSDto) {
        const cts = await this.ctsService.createCTS(dto)
        return cts
    }

    @MessagePattern('update_cts')
    async updateCTS(dto: UpdateCTSDto) {
        const cts = await this.ctsService.updateCTS(dto)
        return cts
    }
}
