import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import { TimetableService } from '../timetable/timetable.service';
import { TimetableModule } from '../timetable/timetable.module';

@Module({
  imports: [
    TimetableModule,
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092']
          },
          //producerOnlyMode: true,
          consumer: {
            groupId: 'auth_consumer'
          }
        }
      }
    ]),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
