import { Controller } from '@nestjs/common';
import { EditTimetableService } from './edit_timetable.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateEditTimetableDto, UpdateEditTimetableDto } from '@app/common';

@Controller('edit-timetable')
export class EditTimetableController {
    constructor(private readonly editTimetableService: EditTimetableService) {}

    @MessagePattern('all_editTimetable')
    async allEditTimetable() {
        const editTimetables = await this.editTimetableService.allEditTimetables()
        return editTimetables
    }

    @MessagePattern('one_editTimetable')
    async oneEditTimetable(id: number) {
        const editTimetable = await this.editTimetableService.oneEditTimetable(id)
        return editTimetable
    }

    @MessagePattern('create_editTimetable')
    async createEditTimetable(dto: CreateEditTimetableDto) {
        const editTimetable = await this.editTimetableService.createEditTimetable(dto)
        return editTimetable
    }

    @MessagePattern('update_editTimetable')
    async updateEditTimetable(dto: UpdateEditTimetableDto) {
        const editTimetable = await this.editTimetableService.updateEditTimetable(dto)
        return editTimetable
    }
}
