import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DisciplineType } from './discipline_types.model';
import { CreateDisciplineTypeDto, UpdateDisciplineTypeDto } from '@app/common';

@Injectable()
export class DisciplineTypesService {
    constructor(
        @InjectModel(DisciplineType) private disciplineTypeRepository: typeof DisciplineType,
        ) {}

        async allDisciplineTypes() {
            const disciplineTypes = await this.disciplineTypeRepository.findAll()
            return disciplineTypes
        }

        async oneDisciplineType(id: number) {
            const disciplineType = await this.disciplineTypeRepository.findByPk(id)
            return disciplineType
        }

        async createDisciplineType(dto: CreateDisciplineTypeDto) {
            const disciplineType = await this.disciplineTypeRepository.create({...dto})
            return disciplineType
        }

        async updateDisciplineType(dto: UpdateDisciplineTypeDto) {
            const {id, ...data} = dto
            const disciplineType = await this.disciplineTypeRepository.update(
                {...data},
                {where: {id}}
            )
            return disciplineType
        }
}
