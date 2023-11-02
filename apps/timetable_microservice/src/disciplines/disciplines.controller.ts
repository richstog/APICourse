import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DisciplinesService } from './disciplines.service';
import { CreateDisciplineDto, UpdateDisciplineDto } from '@app/common';

@Controller('disciplines')
export class DisciplinesController {
    constructor(private readonly disciplinesService: DisciplinesService) {}

    @MessagePattern('all_discipline')
    async allDiscipline() {
        const disciplines = await this.disciplinesService.allDisciplines()
        return disciplines
    }

    @MessagePattern('one_discipline')
    async oneDiscipline(id: number) {
        const discipline = await this.disciplinesService.oneDiscipline(id)
        return discipline
    }

    @MessagePattern('create_discipline')
    async createDiscipline(dto: CreateDisciplineDto) {
        const discipline = await this.disciplinesService.createDiscipline(dto)
        return discipline
    }

    @MessagePattern('update_discipline')
    async updateDiscipline(dto: UpdateDisciplineDto) {
        const discipline = await this.disciplinesService.updateDiscipline(dto)
        return discipline
    }
}
