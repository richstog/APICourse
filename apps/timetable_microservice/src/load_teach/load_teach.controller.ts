import { Controller } from '@nestjs/common';
import { LoadTeachService } from './load_teach.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateLoadTeachDto, UpdateLoadTeachDto } from '@app/common';

@Controller('load-teach')
export class LoadTeachController {
    constructor(private readonly loadTeachService: LoadTeachService) {}

    @MessagePattern('all_loadTeach')
    async allLoadTeache() {
        const loadTeaches = await this.loadTeachService.allLoadTeaches()
        return loadTeaches
    }

    @MessagePattern('one_loadTeach')
    async oneLoadTeach(id: number) {
        const loadTeach = await this.loadTeachService.oneLoadTeach(id)
        return loadTeach
    }

    @MessagePattern('create_loadTeach')
    async createLoadTeach(dto: CreateLoadTeachDto) {
        const loadTeach = await this.loadTeachService.createLoadTeach(dto)
        return loadTeach
    }

    @MessagePattern('update_loadTeach')
    async updateLoadTeach(dto: UpdateLoadTeachDto) {
        const loadTeach = await this.loadTeachService.updateLoadTeach(dto)
        return loadTeach
    }
}
