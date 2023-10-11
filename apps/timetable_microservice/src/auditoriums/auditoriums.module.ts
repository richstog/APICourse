import { Module, forwardRef } from '@nestjs/common';
import { AuditoriumsController } from './auditoriums.controller';
import { AuditoriumsService } from './auditoriums.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auditorium } from './auditoriums.model';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Auditorium]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [AuditoriumsController],
  providers: [AuditoriumsService]
})
export class AuditoriumsModule {}
