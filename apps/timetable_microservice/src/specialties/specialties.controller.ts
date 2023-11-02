import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialityDto, UpdateSpecialityDto } from '@app/common';

@Controller('specialties')
export class SpecialtiesController {
    constructor(private readonly specialtiesService: SpecialtiesService) {}

    @MessagePattern('all_speciality')
    async allSpeciality() {
        const specialties = await this.specialtiesService.allSpecialties()
        return specialties
    }

    @MessagePattern('one_speciality')
    async oneSpeciality(id: number) {
        const specialty = await this.specialtiesService.oneSpeciality(id)
        return specialty
    }

    @MessagePattern('create_speciality')
    async createSpeciality(dto: CreateSpecialityDto) {
        const specialty = await this.specialtiesService.createSpeciality(dto)
        return specialty
    }

    @MessagePattern('update_speciality')
    async updateSpeciality(dto: UpdateSpecialityDto) {
        const specialty = await this.specialtiesService.updateSpeciality(dto)
        return specialty
    }
}
