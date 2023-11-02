import { Injectable } from '@nestjs/common';
import { CTS } from './cts.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCTSDto, UpdateCTSDto } from '@app/common';

@Injectable()
export class CtsService {
    constructor(
        @InjectModel(CTS) private ctsRepository: typeof CTS,
        ) {}

        async allCTSes() {
            const ctses = await this.ctsRepository.findAll()
            return ctses
        }

        async oneCTS(id: number) {
            const cts = await this.ctsRepository.findByPk(id)
            return cts
        }

        async createCTS(dto: CreateCTSDto) {
            const cts = await this.ctsRepository.create({...dto})
            return cts
        }

        async updateCTS(dto: UpdateCTSDto) {
            const {id, ...data} = dto
            const cts = await this.ctsRepository.update(
                {...data},
                {where: {id}}
            )
            return cts
        }
}
