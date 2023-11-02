import { LoginUserDto, RegistUserDto } from '@app/common';
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
            'one_user',
            'delete_user'
        ];
    
        await Promise.all(
            events.map(event => this.authClient.subscribeToResponseOf(event))
        );
    
        await this.authClient.connect();
    }
    
    registrUser(registUserDto: RegistUserDto) {
        return this.authClient.send('registr_user', {})
    }

    loginUser(loginUserDto: LoginUserDto) {
        return this.authClient.send('login_user', {})
    }

    allUsers() {
        return this.authClient.send('all_user', {})
    }

    oneUser(id: number) {
        return this.authClient.send('one_user', {})
    }

    deleteUser() {
        return this.authClient.send('delete_user', {})
    }
}