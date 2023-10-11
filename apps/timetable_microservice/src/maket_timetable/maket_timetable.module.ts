import { Module } from '@nestjs/common';
import { MaketTimetableController } from './maket_timetable.controller';
import { MaketTimetableService } from './maket_timetable.service';

@Module({
  controllers: [MaketTimetableController],
  providers: [MaketTimetableService]
})
export class MaketTimetableModule {}
