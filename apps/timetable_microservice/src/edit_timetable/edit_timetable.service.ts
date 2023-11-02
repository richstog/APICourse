import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EditTimetable } from './edit_timetable.model';
import { CreateEditTimetableDto, UpdateEditTimetableDto } from '@app/common';

@Injectable()
export class EditTimetableService {
    constructor(
        @InjectModel(EditTimetable) private editTimetableRepository: typeof EditTimetable,
        ) {}

        async allEditTimetables() {
            const editTimetables = await this.editTimetableRepository.findAll()
            return editTimetables
        }

        async oneEditTimetable(id: number) {
            const editTimetable = await this.editTimetableRepository.findByPk(id)
            return editTimetable
        }

        async createEditTimetable(dto: CreateEditTimetableDto) {
            const editTimetable = await this.editTimetableRepository.create({...dto})
            return editTimetable
        }

        async updateEditTimetable(dto: UpdateEditTimetableDto) {
            const {id, ...data} = dto
            const editTimetable = await this.editTimetableRepository.update(
                {...data},
                {where: {id}}
            )
            return editTimetable
        }
}
