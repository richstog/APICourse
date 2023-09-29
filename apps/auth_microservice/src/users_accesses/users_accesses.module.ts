import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthMicroserviceModule } from '../auth_microservice.module';
import { Access } from '../accesses/accesses.model';
import { User } from '../users/users.model';

@Module({
    imports: [
        SequelizeModule.forFeature([User, Access]),
        forwardRef(() => AuthMicroserviceModule)
      ]
})
export class UsersAccessesModule {
    
}
