import { Module, forwardRef } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';
import { Student } from './students.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Student]),
    forwardRef(() => TimetableMicroserviceModule)
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [
    StudentsService
  ]
})
export class StudentsModule {}
