import { Module, forwardRef } from '@nestjs/common';
import { FullTimetableController } from './full_timetable.controller';
import { FullTimetableService } from './full_timetable.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FullTimetable } from './full_timetable.model';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';

@Module({
  imports: [
    SequelizeModule.forFeature([FullTimetable]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [FullTimetableController],
  providers: [FullTimetableService]
})
export class FullTimetableModule {}
