import { CreateStudentDto, CreateTeacherDto, CreateUserInfoDto } from '@app/common';
import { Injectable } from '@nestjs/common';
import { StudentsService } from './students/students.service';
import { TeachersService } from './teachers/teachers.service';

@Injectable()
export class TimetableMicroserviceService {

  constructor(
      private studentsService: StudentsService,
      private teachersService: TeachersService,
    ) {}
  
  async createUser(dto: CreateUserInfoDto) {
    console.log(dto)
    if (dto.roleValue === "STUDENT") {
      const student: CreateStudentDto = {
        userId: dto.userId,
        surname: dto.surname,
        name: dto.name,
        middle_name: dto.middle_name,
        group_id: dto.groupId
      }
      return await this.studentsService.createStudent(student)
    }
    else if (dto.roleValue === "TEACHER") {
      const teacher: CreateTeacherDto = {
        userId: dto.userId,
        surname: dto.surname,
        name: dto.name,
        middle_name: dto.middle_name,
      }
      return await this.teachersService.createTeacher(teacher)
    }
  }
}
