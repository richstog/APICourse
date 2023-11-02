import { Controller } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateTeacherDto, UpdateTeacherDto } from '@app/common';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}

    @MessagePattern('all_teacher')
    async allTeacher() {
        const teachers = await this.teachersService.allTeachers()
        return teachers
    }

    @MessagePattern('one_teacher')
    async oneTeacher(id: number) {
        const teacher = await this.teachersService.oneTeacher(id)
        return teacher
    }

    @MessagePattern('create_teacher')
    async createTeacher(dto: CreateTeacherDto) {
        const teacher = await this.teachersService.createTeacher(dto)
        return teacher
    }

    @MessagePattern('update_teacher')
    async updateTeacher(dto: UpdateTeacherDto) {
        const teacher = await this.teachersService.updateTeacher(dto)
        return teacher
    }

}
