import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuditoriumsService } from './auditoriums.service';
import { CreateAuditoriumDto, UpdateAuditoriumDto } from '@app/common';

@Controller('auditoriums')
export class AuditoriumsController {
    constructor(private readonly auditoriumsService: AuditoriumsService) {}

    @MessagePattern('all_auditorium')
    async allAuditorium() {
        const auditoriums = await this.auditoriumsService.allAuditoriums()
        return auditoriums
    }

    @MessagePattern('one_auditorium')
    async oneAuditorium(id: number) {
        const auditorium = await this.auditoriumsService.oneAuditorium(id)
        return auditorium
    }

    @MessagePattern('create_auditorium')
    async createAuditorium(dto: CreateAuditoriumDto) {
        const auditorium = await this.auditoriumsService.createAuditorium(dto)
        return auditorium
    }

    @MessagePattern('update_auditorium')
    async updateAuditorium(dto: UpdateAuditoriumDto) {
        const auditorium = await this.auditoriumsService.updateAuditorium(dto)
        return auditorium
    }
}
