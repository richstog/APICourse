import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import { TimetableService } from '../timetable/timetable.service';
import { TimetableModule } from '../timetable/timetable.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET || 'ZXC_ARISTOKRAT',
      signOptions: {
        expiresIn: '24h'
      }
    }),
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
  controllers: [AuthController],
})
export class AuthModule {}
