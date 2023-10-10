import { Module } from '@nestjs/common';
import { TimetableMicroserviceController } from './timetable_microservice.controller';
import { TimetableMicroserviceService } from './timetable_microservice.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { GroupsModule } from './groups/groups.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { DisciplineTypesModule } from './discipline_types/discipline_types.module';
import { AuditoriumsModule } from './auditoriums/auditoriums.module';
import { LoadTeachModule } from './load_teach/load_teach.module';
import { EditTimetableModule } from './edit_timetable/edit_timetable.module';
import { MaketTimetableModule } from './maket_timetable/maket_timetable.module';
import { FullTimetableModule } from './full_timetable/full_timetable.module';
import { CtsModule } from './cts/cts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [],
      autoLoadModels: true
    }),
    TeachersModule,
    StudentsModule,
    GroupsModule,
    SpecialtiesModule,
    DisciplinesModule,
    DisciplineTypesModule,
    AuditoriumsModule,
    LoadTeachModule,
    EditTimetableModule,
    MaketTimetableModule,
    FullTimetableModule,
    CtsModule
  ],
  controllers: [TimetableMicroserviceController],
  providers: [TimetableMicroserviceService],
})
export class TimetableMicroserviceModule {}
