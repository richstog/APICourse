import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';

import { JwtModule } from '@nestjs/jwt';
import { UsersRoles } from './users_roles/users_roles.model';
import { AccessesModule } from './accesses/accesses.module';
import { UsersAccessesModule } from './users_accesses/users_accesses.module';
import { Access } from './accesses/accesses.model';
import { UsersAccesses } from './users_accesses/uses_accesses.model';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'rhfcbkjdf29',
      database: process.env.POSTGRES_DATABASE || 'novgu_auth_microservice_stud',
      models: [User, Role, Access, UsersAccesses, UsersRoles],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    JwtModule.register({
      secret: process.env.SECRET || 'ZXC_ARISTOKRAT',
      signOptions: {
        expiresIn: '24h'
      }
    }),
    AccessesModule,
    UsersAccessesModule
  ],
  exports: [
    JwtModule
  ]
})
export class AuthMicroserviceModule {}
