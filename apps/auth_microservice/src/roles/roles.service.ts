import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto, ObjectOperationOutput, ObjectName, OperationName } from '@app/common';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(createRoleDto: CreateRoleDto) {
        const role = await this.roleRepository.create(createRoleDto)
        return role
    }

    async deleteRoleById(id: number) {
        await this.roleRepository.destroy({where: {id}})
        return new ObjectOperationOutput(ObjectName.Role, OperationName.destroy)
    }

    async deleteRoleByValue(value: string) {
        await this.roleRepository.destroy({where: {value}})
        return new ObjectOperationOutput(ObjectName.Role, OperationName.destroy)
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role
    }

    async getRoleById(id: number) {
        const role = await this.roleRepository.findOne({where: {id}})
        return role
    }

    async updateRoleById(createRoleDto: CreateRoleDto) {
        const role = await this.roleRepository.update({value: createRoleDto.value, description: createRoleDto.description}, {where: {value: createRoleDto.value}})
        return role
    }
}
