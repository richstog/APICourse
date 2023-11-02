import { Injectable } from '@nestjs/common';
import { Discipline } from './disciplines.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDisciplineDto, UpdateDisciplineDto } from '@app/common';

@Injectable()
export class DisciplinesService {
    constructor(
        @InjectModel(Discipline) private disciplineRepository: typeof Discipline,
        ) {}

        async allDisciplines() {
            const disciplines = await this.disciplineRepository.findAll()
            return disciplines
        }

        async oneDiscipline(id: number) {
            const discipline = await this.disciplineRepository.findByPk(id)
            return discipline
        }

        async createDiscipline(dto: CreateDisciplineDto) {
            const discipline = await this.disciplineRepository.create({...dto})
            return discipline
        }

        async updateDiscipline(dto: UpdateDisciplineDto) {
            const {id, ...data} = dto
            const discipline = await this.disciplineRepository.update(
                {...data},
                {where: {id}}
            )
            return discipline
        }
}
