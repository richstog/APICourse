import { CreateAccessDto, CreateRoleDto, CreateUserAccessDto, CreateUserRoleDto, LoginUserDto, RegistUserDto, UpdateAccessDto, UpdateRoleDto, UpdateUserDto } from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthService implements OnModuleInit {
    
    constructor(@Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka) {}

    async onModuleInit() {
        const events = [
            'registr_user',
            'login_user',
            'all_user',
            'get_user_by_login',
            'delete_user',
            'update_user'
        ];
    
        await Promise.all(
            events.map(event => this.authClient.subscribeToResponseOf(event))
        );
    
        await this.authClient.connect();
    }
    

    // Users
    async registrUser(registUserDto: RegistUserDto) {
        return this.authClient.send('registr_user', {...registUserDto})
    }

    async loginUser(loginUserDto: LoginUserDto) {
        return this.authClient.send('login_user', {...loginUserDto})
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

    async updateUser(updateUserDto: UpdateUserDto) {
        return this.authClient.send('update_user', {...updateUserDto})
    }


    // UserRole
    async addRoleToUser(dto: CreateUserRoleDto) {
        return this.authClient.send('add_user_role', {...dto})
    }

    async deleteRoleToUser(dto: CreateUserRoleDto) {
        return this.authClient.send('delete_user_role', {...dto})
    }

    // Roles
    async allRole() {
    	return this.authClient.send('all_role', {})
    }
    async oneRole(id: number) {
    	return this.authClient.send('one_role', id)
    }
    async createRole(dto: CreateRoleDto) {
    	return this.authClient.send('create_role', {...dto})
    }
    async updateRole(dto: UpdateRoleDto) {
    	return this.authClient.send('update_role', {...dto})
    }
    async deleteRole(id: number) {
    	return this.authClient.send('delete_role', id)
    }

    // UserAccess
    async addAccessToUser(dto: CreateUserAccessDto) {
        return this.authClient.send('add_user_access', {...dto})
    }

    async deleteAccessToUser(dto: CreateUserAccessDto) {
        return this.authClient.send('delete_user_access', {...dto})
    }

    // Accesses
    async allAccess() {
    	return this.authClient.send('all_access', {})
    }
    async oneAccess(id: number) {
    	return this.authClient.send('one_access', id)
    }
    async createAccess(dto: CreateAccessDto) {
    	return this.authClient.send('create_access', {...dto})
    }
    async updateAccess(dto: UpdateAccessDto) {
    	return this.authClient.send('update_access', {...dto})
    }
    async deleteAccess(id: number) {
    	return this.authClient.send('delete_access', id)
    }
}