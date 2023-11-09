import { Controller, Get } from '@nestjs/common';
import { TimetableMicroserviceService } from './timetable_microservice.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserInfoDto } from '@app/common';

@Controller()
export class TimetableMicroserviceController {
  constructor(private readonly timetableMicroserviceService: TimetableMicroserviceService) {}


}
