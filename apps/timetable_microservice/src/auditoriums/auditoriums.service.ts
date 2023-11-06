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
            return JSON.stringify(auditoriums)
        }

        async oneAuditorium(id: number) {
            const auditorium = await this.auditoriumRepository.findByPk(id)
            return JSON.stringify(auditorium)
        }

        async createAuditorium(dto: CreateAuditoriumDto) {
            const auditorium = await this.auditoriumRepository.create(dto)
            return JSON.stringify(auditorium)
        }

        async updateAuditorium(dto: UpdateAuditoriumDto) {
            const {id, ...data} = dto
            const auditorium = await this.auditoriumRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(auditorium)
        }

        async deleteAuditorium(id: number) {
            const auditorium = await this.auditoriumRepository.destroy({where: {id}})
            return JSON.stringify(auditorium)
        }
}
