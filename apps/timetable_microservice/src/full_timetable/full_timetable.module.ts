import { Module } from '@nestjs/common';
import { FullTimetableController } from './full_timetable.controller';
import { FullTimetableService } from './full_timetable.service';

@Module({
  controllers: [FullTimetableController],
  providers: [FullTimetableService]
})
export class FullTimetableModule {}
