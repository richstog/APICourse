import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from '@app/common';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(createRoleDto: CreateRoleDto) {
        const role = await this.roleRepository.create(createRoleDto)
        return role
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role
    }

}
