import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './groups.model';
import { CreateGroupDto, UpdateGroupDto } from '@app/common';

@Injectable()
export class GroupsService {
    constructor(
        @InjectModel(Group) private groupRepository: typeof Group,
        ) {}

        async allGroups() {
            const groups = await this.groupRepository.findAll()
            return JSON.stringify(groups)
        }

        async oneGroup(id: number) {
            const group = await this.groupRepository.findByPk(id)
            return JSON.stringify(group)
        }

        async createGroup(dto: CreateGroupDto) {
            const group = await this.groupRepository.create({...dto})
            return JSON.stringify(group)
        }

        async updateGroup(dto: UpdateGroupDto) {
            const {id, ...data} = dto
            const group = await this.groupRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(group)
        }

        async deleteGroup(id: number) {
            const group = await this.groupRepository.destroy({where: {id}})
            return JSON.stringify(group)
        }
}
