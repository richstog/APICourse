import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Auditorium } from './auditoriums.model';
import { CreateAuditoriumDto, UpdateAuditoriumDto } from '@app/common';

@Injectable()
export class AuditoriumsService {
    constructor(
        @InjectModel(Auditorium) private auditoriumRepository: typeof Auditorium,
        ) {}

        async allAuditoriums() {
            const auditoriums = await this.auditoriumRepository.findAll()
            return auditoriums
        }

        async oneAuditorium(id: number) {
            const auditorium = await this.auditoriumRepository.findByPk(id)
            return auditorium
        }

        async createAuditorium(dto: CreateAuditoriumDto) {
            const auditorium = await this.auditoriumRepository.create({...dto})
            return auditorium
        }

        async updateAuditorium(dto: UpdateAuditoriumDto) {
            const {id, ...data} = dto
            const auditorium = await this.auditoriumRepository.update(
                {...data},
                {where: {id}}
            )
            return auditorium
        }
}
