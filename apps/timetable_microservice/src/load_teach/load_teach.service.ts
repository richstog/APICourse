import { Injectable } from '@nestjs/common';
import { LoadTeach } from './load_teach.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLoadTeachDto, UpdateLoadTeachDto } from '@app/common';

@Injectable()
export class LoadTeachService {
    constructor(
        @InjectModel(LoadTeach) private loadTeachRepository: typeof LoadTeach,
        ) {}

        async allLoadTeaches() {
            const loadTeaches = await this.loadTeachRepository.findAll()
            return JSON.stringify(loadTeaches)
        }

        async oneLoadTeach(id: number) {
            const loadTeach = await this.loadTeachRepository.findByPk(id)
            return JSON.stringify(loadTeach)
        }

        async createLoadTeach(dto: CreateLoadTeachDto) {
            const loadTeach = await this.loadTeachRepository.create({...dto})
            return JSON.stringify(loadTeach)
        }

        async updateLoadTeach(dto: UpdateLoadTeachDto) {
            const {id, ...data} = dto
            const loadTeach = await this.loadTeachRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(loadTeach)
        }

        async deleteLoadTeach(id: number) {
            const loadTeach = await this.loadTeachRepository.destroy({where: {id}})
            return JSON.stringify(loadTeach)
        }
}
