import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Role } from '../roles/roles.model';
import { AuthMicroserviceModule } from '../auth_microservice.module';

@Module({
    imports: [
        SequelizeModule.forFeature([User, Role]),
        forwardRef(() => AuthMicroserviceModule)
      ]
})
export class UsersRolesModule {
    
}
