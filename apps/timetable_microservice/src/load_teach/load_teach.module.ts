import { Module, forwardRef } from '@nestjs/common';
import { LoadTeachController } from './load_teach.controller';
import { LoadTeachService } from './load_teach.service';
import { LoadTeach } from './load_teach.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';

@Module({
  imports: [
    SequelizeModule.forFeature([LoadTeach]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [LoadTeachController],
  providers: [LoadTeachService]
})
export class LoadTeachModule {}
