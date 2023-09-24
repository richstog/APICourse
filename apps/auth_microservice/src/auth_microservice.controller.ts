import { Controller, Get } from '@nestjs/common';
import { AuthMicroserviceService } from './auth_microservice.service';

@Controller()
export class AuthMicroserviceController {
  constructor(private readonly authMicroserviceService: AuthMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.authMicroserviceService.getHello();
  }
}
