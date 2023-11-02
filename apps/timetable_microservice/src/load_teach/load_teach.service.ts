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
            return loadTeaches
        }

        async oneLoadTeach(id: number) {
            const loadTeach = await this.loadTeachRepository.findByPk(id)
            return loadTeach
        }

        async createLoadTeach(dto: CreateLoadTeachDto) {
            const loadTeach = await this.loadTeachRepository.create({...dto})
            return loadTeach
        }

        async updateLoadTeach(dto: UpdateLoadTeachDto) {
            const {id, ...data} = dto
            const loadTeach = await this.loadTeachRepository.update(
                {...data},
                {where: {id}}
            )
            return loadTeach
        }
}
