import { Controller, Get } from '@nestjs/common';
import { TimetableMicroserviceService } from './timetable_microservice.service';

@Controller()
export class TimetableMicroserviceController {
  constructor(private readonly timetableMicroserviceService: TimetableMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.timetableMicroserviceService.getHello();
  }
}
