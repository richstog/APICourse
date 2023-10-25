import { Module, forwardRef } from '@nestjs/common';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';
import { Speciality } from './specialities.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Speciality]),
    forwardRef(() => TimetableMicroserviceModule)
  ],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService]
})
export class SpecialtiesModule {}
