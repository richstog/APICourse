import { Module, forwardRef } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from './groups.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Group]),
    forwardRef(() => TimetableMicroserviceModule)
  ],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
