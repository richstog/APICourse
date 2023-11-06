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
            return JSON.stringify(disciplines)
        }

        async oneDiscipline(id: number) {
            const discipline = await this.disciplineRepository.findByPk(id)
            return JSON.stringify(discipline)
        }

        async createDiscipline(dto: CreateDisciplineDto) {
            const discipline = await this.disciplineRepository.create({...dto})
            return JSON.stringify(discipline)
        }

        async updateDiscipline(dto: UpdateDisciplineDto) {
            const {id, ...data} = dto
            const discipline = await this.disciplineRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(discipline)
        }

        async deleteDiscipline(id: number) {
            const discipline = await this.disciplineRepository.destroy({where: {id}})
            return JSON.stringify(discipline)
        }
}
