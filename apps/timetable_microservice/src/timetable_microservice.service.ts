import { Injectable } from '@nestjs/common';

@Injectable()
export class TimetableMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
