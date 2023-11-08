import { Module, forwardRef } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';
import { Teacher } from './teachers.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Teacher]),
    forwardRef(() => TimetableMicroserviceModule)
  ],
  controllers: [TeachersController],
  providers: [TeachersService],
  exports: [TeachersService]
})
export class TeachersModule {}
