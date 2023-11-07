import { CreateAccessDto, UpdateAccessDto } from '@app/common';
import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Access } from './accesses.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AccessesService {

    constructor(
        @InjectModel(Access) private accessRepository: typeof Access,
        ) {}

        async allAccesss() {
            const accesses = await this.accessRepository.findAll()
            return JSON.stringify(accesses)
        }

        async oneAccess(id: number) {
            const access = await this.accessRepository.findByPk(id)
            return JSON.stringify(access)
        }

        async createAccess(dto: CreateAccessDto) {
            const access = await this.accessRepository.create(dto)
            return JSON.stringify(access)
        }

        async updateAccess(dto: UpdateAccessDto) {
            const {id, ...data} = dto
            const access = await this.accessRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(access)
        }

        async deleteAccess(id: number) {
            const access = await this.accessRepository.destroy({where: {id}})
            return JSON.stringify(access)
        }
}
