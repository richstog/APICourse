import { Module } from '@nestjs/common';
import { TimetableMicroserviceController } from './timetable_microservice.controller';
import { TimetableMicroserviceService } from './timetable_microservice.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

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
    })
  ],
  controllers: [TimetableMicroserviceController],
  providers: [TimetableMicroserviceService],
})
export class TimetableMicroserviceModule {}
