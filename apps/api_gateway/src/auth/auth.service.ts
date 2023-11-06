import { CreateUserRoleDto, LoginUserDto, RegistUserDto } from '@app/common';
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
            'delete_user'
        ];
    
        await Promise.all(
            events.map(event => this.authClient.subscribeToResponseOf(event))
        );
    
        await this.authClient.connect();
    }
    

    // Users
    registrUser(registUserDto: RegistUserDto) {
        return this.authClient.send('registr_user', {...registUserDto})
    }

    loginUser(loginUserDto: LoginUserDto) {
        return this.authClient.send('login_user', {...loginUserDto})
    }

    allUsers() {
        return this.authClient.send('all_user', {})
    }

    getUserByLogin(login: string) {
        return this.authClient.send('get_user_by_login', login)
    }

    deleteUser(id: number) {
        return this.authClient.send('delete_user', id)
    }

    async addRoleToUser(createUserRoleDto: CreateUserRoleDto) {
        
    }

    async deleteRoleToUser(createUserRoleDto: CreateUserRoleDto) {
        
    }
}