import { CreateAccessDto, CreateRoleDto, CreateStudentDto, CreateTeacherDto, CreateUserAccessDto, CreateUserDto, CreateUserRoleDto, LoginUserDto, RegistUserDto, UpdateAccessDto, UpdateRoleDto, UpdateUserDto } from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { TimetableService } from '../timetable/timetable.service';
import { User } from 'apps/auth_microservice/src/users/users.model';

@Injectable()
export class AuthService implements OnModuleInit {
    
    constructor(@Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,) {}

    async onModuleInit() {
        const events = [
            'registr_user',
            'login_user',
            'all_user',
            'get_user_by_login',
            'delete_user',
            'update_user',
            'create_role',
            'all_role',
            'one_role',
            'create_access',
            'all_access',
            'delete_role'
        ];
    
        await Promise.all(
            events.map(event => this.authClient.subscribeToResponseOf(event))
        );
    
        await this.authClient.connect();
    }
    

    // Users
    registrUser(dto: RegistUserDto) {
        //console.log(dto)

        return this.authClient.send('registr_user', {...dto})
    }

    async loginUser(dto: LoginUserDto) {
        console.log('Сервис', dto)
        return await this.authClient.send('login_user', {...dto})
    }

    async allUsers() {
        return this.authClient.send('all_user', {})
    }

    async getUserByLogin(login: string) {
        return this.authClient.send('get_user_by_login', login)
    }

    async deleteUser(id: number) {
        return this.authClient.send('delete_user', id)
    }

    async updateUser(dto: UpdateUserDto) {
        return this.authClient.send('update_user', JSON.stringify(dto))
    }


    // UserRole
    async addRoleToUser(dto: CreateUserRoleDto) {
        return this.authClient.send('add_user_role', JSON.stringify(dto))
    }

    async deleteRoleToUser(dto: CreateUserRoleDto) {
        return this.authClient.send('delete_user_role', JSON.stringify(dto))
    }

    // Roles
    async allRole() {
    	return this.authClient.send('all_role', {})
    }
    async oneRole(id: number) {
    	return this.authClient.send('one_role', id)
    }
    async createRole(dto: CreateRoleDto) {
        
    	return this.authClient.send('create_role', JSON.stringify(dto))
    }
    async updateRole(dto: UpdateRoleDto) {
    	return this.authClient.send('update_role', JSON.stringify(dto))
    }
    async deleteRole(id: number) {
    	return this.authClient.send('delete_role', id)
    }

    // UserAccess
    async addAccessToUser(dto: CreateUserAccessDto) {
        return this.authClient.send('add_user_access', JSON.stringify(dto))
    }

    async deleteAccessToUser(dto: CreateUserAccessDto) {
        return this.authClient.send('delete_user_access', JSON.stringify(dto))
    }

    // Accesses
    async allAccess() {
    	return this.authClient.send('all_access', {})
    }
    async oneAccess(id: number) {
    	return this.authClient.send('one_access', id)
    }
    async createAccess(dto: CreateAccessDto) {
        console.log(dto)
    	return this.authClient.send('create_access', JSON.stringify(dto))
    }
    async updateAccess(dto: UpdateAccessDto) {
    	return this.authClient.send('update_access', JSON.stringify(dto))
    }
    async deleteAccess(id: number) {
    	return this.authClient.send('delete_access', id)
    }
}