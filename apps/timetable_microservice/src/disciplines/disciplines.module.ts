import { Module, forwardRef } from '@nestjs/common';
import { DisciplinesController } from './disciplines.controller';
import { DisciplinesService } from './disciplines.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';
import { Discipline } from './disciplines.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Discipline]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [DisciplinesController],
  providers: [DisciplinesService]
})
export class DisciplinesModule {}
