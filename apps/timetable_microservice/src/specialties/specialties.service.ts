import { Injectable } from '@nestjs/common';
import { Speciality } from './specialities.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSpecialityDto, UpdateSpecialityDto } from '@app/common';

@Injectable()
export class SpecialtiesService {
    constructor(
        @InjectModel(Speciality) private specialityRepository: typeof Speciality,
        ) {}

        async allSpecialties() {
            const specialities = await this.specialityRepository.findAll()
            return specialities
        }

        async oneSpeciality(id: number) {
            const speciality = await this.specialityRepository.findByPk(id)
            return speciality
        }

        async createSpeciality(dto: CreateSpecialityDto) {
            const speciality = await this.specialityRepository.create({...dto})
            return speciality
        }

        async updateSpeciality(dto: UpdateSpecialityDto) {
            const {id, ...data} = dto
            const speciality = await this.specialityRepository.update(
                {...data},
                {where: {id}}
            )
            return speciality
        }
}
