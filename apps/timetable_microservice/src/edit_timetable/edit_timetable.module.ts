import { Module } from '@nestjs/common';
import { EditTimetableController } from './edit_timetable.controller';
import { EditTimetableService } from './edit_timetable.service';

@Module({
  controllers: [EditTimetableController],
  providers: [EditTimetableService]
})
export class EditTimetableModule {}
