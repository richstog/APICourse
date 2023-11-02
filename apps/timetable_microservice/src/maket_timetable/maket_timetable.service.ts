import { Injectable } from '@nestjs/common';
import { MaketTimeTable } from './maket_timetable.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMaketTimetableDto, UpdateMaketTimetableDto } from '@app/common';

@Injectable()
export class MaketTimetableService {
    constructor(
        @InjectModel(MaketTimeTable) private maketTimeTableRepository: typeof MaketTimeTable,
        ) {}

        async allMaketTimetables() {
            const maketTimeTables = await this.maketTimeTableRepository.findAll()
            return maketTimeTables
        }

        async oneMaketTimetable(id: number) {
            const maketTimeTable = await this.maketTimeTableRepository.findByPk(id)
            return maketTimeTable
        }

        async createMaketTimetable(dto: CreateMaketTimetableDto) {
            const maketTimeTable = await this.maketTimeTableRepository.create({...dto})
            return maketTimeTable
        }

        async updateMaketTimetable(dto: UpdateMaketTimetableDto) {
            const {id, ...data} = dto
            const maketTimeTable = await this.maketTimeTableRepository.update(
                {...data},
                {where: {id}}
            )
            return maketTimeTable
        }
}
