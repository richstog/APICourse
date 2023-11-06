import { Controller } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateGroupDto, UpdateGroupDto } from '@app/common';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) {}

    @MessagePattern('all_group')
    async allGroup() {
        const groups = await this.groupsService.allGroups()
        return groups
    }

    @MessagePattern('one_group')
    async oneGroup(id: number) {
        const group = await this.groupsService.oneGroup(id)
        return group
    }

    @MessagePattern('create_group')
    async createGroup(dto: CreateGroupDto) {
        const group = await this.groupsService.createGroup(dto)
        return group
    }

    @MessagePattern('update_group')
    async updateGroup(dto: UpdateGroupDto) {
        const group = await this.groupsService.updateGroup(dto)
        return group
    }

    @MessagePattern('delete_group')
    async deleteGroup(id: number) {
        const group = await this.groupsService.deleteGroup(id)
        return group
    }

}
