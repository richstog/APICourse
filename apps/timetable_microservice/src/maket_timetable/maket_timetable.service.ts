import { Injectable } from '@nestjs/common';
import { MaketTimetable } from './maket_timetable.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMaketTimetableDto, UpdateMaketTimetableDto } from '@app/common';

@Injectable()
export class MaketTimetableService {
    constructor(
        @InjectModel(MaketTimetable) private maketTimeTableRepository: typeof MaketTimetable,
        ) {}

        async allMaketTimetables() {
            const maketTimeTables = await this.maketTimeTableRepository.findAll()
            return JSON.stringify(maketTimeTables)
        }

        async oneMaketTimetable(id: number) {
            const maketTimeTable = await this.maketTimeTableRepository.findByPk(id)
            return JSON.stringify(maketTimeTable)
        }

        async createMaketTimetable(dto: CreateMaketTimetableDto) {
            const maketTimeTable = await this.maketTimeTableRepository.create({...dto})
            return JSON.stringify(maketTimeTable)
        }

        async updateMaketTimetable(dto: UpdateMaketTimetableDto) {
            const {id, ...data} = dto
            const maketTimeTable = await this.maketTimeTableRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(maketTimeTable)
        }
}
