import { CreateStudentDto, CreateTeacherDto, CreateUserInfoDto } from '@app/common';
import { Injectable } from '@nestjs/common';
import { TeachersService } from './teachers/teachers.service';

@Injectable()
export class TimetableMicroserviceService {

  constructor(
      private teachersService: TeachersService,
    ) {}
}
