import { Controller } from '@nestjs/common';
import { DisciplineTypesService } from './discipline_types.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateDisciplineTypeDto, UpdateDisciplineTypeDto } from '@app/common';

@Controller('discipline-types')
export class DisciplineTypesController {
    constructor(private readonly disciplineTypesService: DisciplineTypesService) {}

    @MessagePattern('all_disciplineType')
    async allDisciplineType() {
        const disciplineTypes = await this.disciplineTypesService.allDisciplineTypes()
        return disciplineTypes
    }

    @MessagePattern('one_disciplineType')
    async oneDisciplineType(id: number) {
        const disciplineType = await this.disciplineTypesService.oneDisciplineType(id)
        return disciplineType
    }

    @MessagePattern('create_disciplineType')
    async createDisciplineType(dto: CreateDisciplineTypeDto) {
        const disciplineType = await this.disciplineTypesService.createDisciplineType(dto)
        return disciplineType
    }

    @MessagePattern('update_disciplineType')
    async updateDisciplineType(dto: UpdateDisciplineTypeDto) {
        const disciplineType = await this.disciplineTypesService.updateDisciplineType(dto)
        return disciplineType
    }

    @MessagePattern('delete_disciplineType')
    async deleteCTS(id: number) {
        const disciplineType = await this.disciplineTypesService.deleteDisciplineType(id)
        return disciplineType
    }
}