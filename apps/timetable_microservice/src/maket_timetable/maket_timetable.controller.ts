import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MaketTimetableService } from './maket_timetable.service';
import { CreateMaketTimetableDto, UpdateMaketTimetableDto } from '@app/common';

@Controller('maket-timetable')
export class MaketTimetableController {
    constructor(private readonly maketTimetableService: MaketTimetableService) {}

    @MessagePattern('all_makeTimetable')
    async allMakeTimetable() {
        const maketTimetables = await this.maketTimetableService.allMaketTimetables()
        return maketTimetables
    }

    @MessagePattern('one_makeTimetables')
    async oneMakeTimetable(id: number) {
        const maketTimetable = await this.maketTimetableService.oneMaketTimetable(id)
        return maketTimetable
    }

    @MessagePattern('create_maketTimetable')
    async createMaketTimetable(dto: CreateMaketTimetableDto) {
        const maketTimetable = await this.maketTimetableService.createMaketTimetable(dto)
        return maketTimetable
    }

    @MessagePattern('update_maketTimetable')
    async updateMaketTimetable(dto: UpdateMaketTimetableDto) {
        const maketTimetable = await this.maketTimetableService.updateMaketTimetable(dto)
        return maketTimetable
    }

}
