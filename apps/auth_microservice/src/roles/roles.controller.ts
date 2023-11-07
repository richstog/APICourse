import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateRoleDto, UpdateRoleDto } from '@app/common';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) {}

    @MessagePattern('all_role')
    async allRole() {
        const roles = await this.rolesService.allRoles()
        return roles
    }

    @MessagePattern('one_role')
    async oneRole(id: number) {
        const role = await this.rolesService.oneRole(id)
        return role
    }

    @MessagePattern('create_role')
    async createRole(dto: CreateRoleDto) {
        const role = await this.rolesService.createRole(dto)
        return role
    }

    @MessagePattern('update_role')
    async updateRole(dto: UpdateRoleDto) {
        const role = await this.rolesService.updateRole(dto)
        return role
    }

    @MessagePattern('delete_role')
    async deleteRole(id: number) {
        const role = await this.rolesService.deleteRole(id)
        return role
    }
}
