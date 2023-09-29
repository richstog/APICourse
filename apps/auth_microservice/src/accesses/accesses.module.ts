import { Module, forwardRef } from '@nestjs/common';
import { AccessesService } from './accesses.service';
import { AccessesController } from './accesses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { UsersAccesses } from '../users_accesses/uses_accesses.model';
import { AuthMicroserviceModule } from '../auth_microservice.module';
import { Access } from './accesses.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Access, User, UsersAccesses]),
    forwardRef(() => AuthMicroserviceModule)
  ],
  providers: [AccessesService],
  controllers: [AccessesController]
})
export class AccessesModule {}
