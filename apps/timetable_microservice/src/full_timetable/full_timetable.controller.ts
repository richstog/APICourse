import { Controller } from '@nestjs/common';
import { FullTimetableService } from './full_timetable.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateFullTimetableDto, UpdateFullTimetableDto } from '@app/common';

@Controller('full-timetable')
export class FullTimetableController {
    constructor(private readonly fullTimetableService: FullTimetableService) {}

    @MessagePattern('all_fullTimetable')
    async allFullTimetable() {
        const fullTimetables = await this.fullTimetableService.allFullTimetables()
        return fullTimetables
    }

    @MessagePattern('one_fullTimetable')
    async oneFullTimetable(id: number) {
        const fullTimetable = await this.fullTimetableService.oneFullTimetable(id)
        return fullTimetable
    }

    @MessagePattern('create_fullTimetable')
    async createFullTimetable(dto: CreateFullTimetableDto) {
        const fullTimetable = await this.fullTimetableService.createFullTimetable(dto)
        return fullTimetable
    }

    @MessagePattern('update_fullTimetable')
    async updateFullTimetable(dto: UpdateFullTimetableDto) {
        const fullTimetable = await this.fullTimetableService.updateFullTimetable(dto)
        return fullTimetable
    }

}
