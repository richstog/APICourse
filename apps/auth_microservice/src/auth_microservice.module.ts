import { Module } from '@nestjs/common';
import { AuthMicroserviceController } from './auth_microservice.controller';
import { AuthMicroserviceService } from './auth_microservice.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UsersRolesModule } from './users_roles/users_roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [User, Role],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    UsersRolesModule
  ],
  controllers: [AuthMicroserviceController],
  providers: [AuthMicroserviceService],
})
export class AuthMicroserviceModule {}
