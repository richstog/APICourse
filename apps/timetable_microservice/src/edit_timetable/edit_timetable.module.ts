import { Module, forwardRef } from '@nestjs/common';
import { EditTimetableController } from './edit_timetable.controller';
import { EditTimetableService } from './edit_timetable.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';
import { EditTimetable } from './edit_timetable.model';

@Module({
  imports: [
    SequelizeModule.forFeature([EditTimetable]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [EditTimetableController],
  providers: [EditTimetableService]
})
export class EditTimetableModule {}
