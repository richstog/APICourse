import { Injectable } from '@nestjs/common';
import { FullTimetable } from './full_timetable.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFullTimetableDto, UpdateFullTimetableDto } from '@app/common';

@Injectable()
export class FullTimetableService {
    constructor(
        @InjectModel(FullTimetable) private fullTimetableRepository: typeof FullTimetable,
        ) {}

        async allFullTimetables() {
            const fullTimetables = await this.fullTimetableRepository.findAll()
            return JSON.stringify(fullTimetables)
        }

        async oneFullTimetable(id: number) {
            const fullTimetable = await this.fullTimetableRepository.findByPk(id)
            return JSON.stringify(fullTimetable)
        }

        async createFullTimetable(dto: CreateFullTimetableDto) {
            const fullTimetable = await this.fullTimetableRepository.create({...dto})
            return JSON.stringify(fullTimetable)
        }

        async updateFullTimetable(dto: UpdateFullTimetableDto) {
            const {id, ...data} = dto
            const fullTimetable = await this.fullTimetableRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(fullTimetable)
        }

        async deleteFullTimetable(id: number) {
            const fullTimetable = await this.fullTimetableRepository.destroy({where: {id}})
            return JSON.stringify(fullTimetable)
        }

}
