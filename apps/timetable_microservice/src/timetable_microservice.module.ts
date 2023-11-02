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
import { Auditorium } from './auditoriums/auditoriums.model';
import { CTS } from './cts/cts.model';
import { DisciplineType } from './discipline_types/discipline_types.model';
import { Discipline } from './disciplines/disciplines.model';
import { EditTimetable } from './edit_timetable/edit_timetable.model';
import { FullTimetable } from './full_timetable/full_timetable.model';
import { Group } from './groups/groups.model';
import { LoadTeach } from './load_teach/load_teach.model';
import { MaketTimeTable } from './maket_timetable/maket_timetable.model';
import { Speciality } from './specialties/specialities.model';
import { Student } from './students/students.model';
import { Teacher } from './teachers/teachers.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'rhfcbkjdf29',
      database: process.env.POSTGRES_DATABASE || 'novgu_timetable_microservice',
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
