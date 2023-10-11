import { Module, forwardRef } from '@nestjs/common';
import { DisciplineTypesController } from './discipline_types.controller';
import { DisciplineTypesService } from './discipline_types.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';
import { DisciplineType } from './discipline_types.model';

@Module({
  imports: [
    SequelizeModule.forFeature([DisciplineType]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [DisciplineTypesController],
  providers: [DisciplineTypesService]
})
export class DisciplineTypesModule {}
