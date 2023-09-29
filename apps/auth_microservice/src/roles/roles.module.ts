import { Module, forwardRef } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Role } from './roles.model';
import { AuthMicroserviceModule } from '../auth_microservice.module';
import { UsersRoles } from '../users_roles/users_roles.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UsersRoles]),
    forwardRef(() => AuthMicroserviceModule)
  ],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
