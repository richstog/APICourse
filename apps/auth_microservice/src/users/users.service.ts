import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { RegistUserDto } from '@app/common';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

    async registrUser(dto: RegistUserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    // async addRole(dto: addRoleDto) {
    //     const user = await this.userRepository.findByPk(dto.userId)
    //     const role = await this.roleService.getRoleByValue(dto.value)
    //     if (role && user) {
    //         await user.$add('role', role.id)
    //         return dto
    //     }
    //     throw new HttpException('User or role is not defined', HttpStatus.BAD_REQUEST)
    // }
}
