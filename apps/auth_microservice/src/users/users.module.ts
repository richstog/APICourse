import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { AuthMicroserviceModule } from '../auth_microservice.module';
import { RolesModule } from '../roles/roles.module';
import { Access } from '../accesses/accesses.model';
import { UsersAccesses } from '../users_accesses/uses_accesses.model';
import { UsersRoles } from '../users_roles/users_roles.model';
import { AccessesModule } from '../accesses/accesses.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, Access, UsersAccesses, UsersRoles]),
    forwardRef(() => AuthMicroserviceModule),
    RolesModule,
    AccessesModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
