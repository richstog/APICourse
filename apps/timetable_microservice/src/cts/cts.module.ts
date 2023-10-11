import { Module, forwardRef } from '@nestjs/common';
import { CtsController } from './cts.controller';
import { CtsService } from './cts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CTS } from './cts.model';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';

@Module({
  imports: [
    SequelizeModule.forFeature([CTS]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [CtsController],
  providers: [CtsService]
})
export class CtsModule {}
