import { NestFactory } from '@nestjs/core';
import { TimetableMicroserviceModule } from './timetable_microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions> (
    TimetableMicroserviceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092']
        },
        consumer: {
          groupId: 'timetable_consumer'
        }
      }
    }
  )

  app.listen()
}
bootstrap();
