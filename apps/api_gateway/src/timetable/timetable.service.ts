import {
    CreateAuditoriumDto,
    UpdateAuditoriumDto,
    CreateCTSDto,
    UpdateCTSDto,
    CreateDisciplineTypeDto,
    UpdateDisciplineTypeDto,
    CreateDisciplineDto,
    UpdateDisciplineDto,
    CreateEditTimetableDto,
    UpdateEditTimetableDto,
    CreateFullTimetableDto,
    UpdateFullTimetableDto,
    CreateGroupDto,
    UpdateGroupDto,
    CreateLoadTeachDto,
    UpdateLoadTeachDto,
    CreateMaketTimetableDto,
    UpdateMaketTimetableDto,
    CreateSpecialityDto,
    UpdateSpecialityDto,
    CreateStudentDto,
    UpdateStudentDto,
    CreateTeacherDto,
    UpdateTeacherDto,
} from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class TimetableService {
    constructor(@Inject('TIMETABLE_MICROSERVICE') private readonly timetableClient: ClientKafka) {}

    async onModuleInit() {
        const events = [
            'all_auditoriums',
            'one_auditoriums',
            'create_auditoriums',
            'update_auditoriums',
            'delete_auditoriums',
            'all_cts',
            'one_cts',
            'create_cts',
            'update_cts',
            'delete_cts',
            'all_disciplineType',
            'one_disciplineType',
            'create_disciplineType',
            'update_disciplineType',
            'delete_disciplineType',
            'all_discipline',
            'one_discipline',
            'create_discipline',
            'update_discipline',
            'delete_discipline',
            'all_editTimetable',
            'one_editTimetable',
            'create_editTimetable',
            'update_editTimetable',
            'delete_editTimetable',
            'all_fullTimetable',
            'one_fullTimetable',
            'create_fullTimetable',
            'update_fullTimetable',
            'delete_fullTimetable',
            'all_group',
            'one_group',
            'create_group',
            'update_group',
            'delete_group',
            'all_loadTeach',
            'one_loadTeach',
            'create_loadTeach',
            'update_loadTeach',
            'delete_loadTeach',
            'all_maketTimetable',
            'one_maketTimetable',
            'create_maketTimetable',
            'update_maketTimetable',
            'delete_maketTimetable',
            'all_speciality',
            'one_speciality',
            'create_speciality',
            'update_speciality',
            'delete_speciality',
            'all_student',
            'one_student',
            'create_student',
            'update_student',
            'delete_student',
            'all_teacher',
            'one_teacher',
            'create_teacher',
            'update_teacher',
            'delete_teacher',
        ];
    
        await Promise.all(
            events.map(event => this.timetableClient.subscribeToResponseOf(event))
        );
    
        await this.timetableClient.connect();
    }

    //Auditorium gateway controllers
    async allAuditorium() {
    	return this.timetableClient.send('all_auditorium', {})
    }
    async oneAuditorium(id: number) {
    	return this.timetableClient.send('one_auditorium', {id})
    }
    async createAuditorium(dto: CreateAuditoriumDto) {
    	return this.timetableClient.send('create_auditorium', {dto})
    }
    async updateAuditorium(dto: UpdateAuditoriumDto) {
    	return this.timetableClient.send('update_auditorium', {dto})
    }
    async deleteAuditorium(id: number) {
    	return this.timetableClient.send('delete_auditorium', {id})
    }

    //CTS gateway controllers
    async allCTS() {
    	return this.timetableClient.send('all_cts', {})
    }
    async oneCTS(id: number) {
    	return this.timetableClient.send('one_cts', {id})
    }
    async createCTS(dto: CreateCTSDto) {
    	return this.timetableClient.send('create_cts', {dto})
    }
    async updateCTS(dto: UpdateCTSDto) {
    	return this.timetableClient.send('update_cts', {dto})
    }
    async deleteCTS(id: number) {
    	return this.timetableClient.send('delete_cts', {id})
    }

    //DisciplineType gateway controllers
    async allDisciplineType() {
    	return this.timetableClient.send('all_disciplineType', {})
    }
    async oneDisciplineType(id: number) {
    	return this.timetableClient.send('one_disciplineType', {id})
    }
    async createDisciplineType(dto: CreateDisciplineTypeDto) {
    	return this.timetableClient.send('create_disciplineType', {dto})
    }
    async updateDisciplineType(dto: UpdateDisciplineTypeDto) {
    	return this.timetableClient.send('update_disciplineType', {dto})
    }
    async deleteDisciplineType(id: number) {
    	return this.timetableClient.send('delete_disciplineType', {id})
    }

    //Discipline gateway controllers
    async allDiscipline() {
    	return this.timetableClient.send('all_discipline', {})
    }
    async oneDiscipline(id: number) {
    	return this.timetableClient.send('one_discipline', {id})
    }
    async createDiscipline(dto: CreateDisciplineDto) {
    	return this.timetableClient.send('create_discipline', {dto})
    }
    async updateDiscipline(dto: UpdateDisciplineDto) {
    	return this.timetableClient.send('update_discipline', {dto})
    }
    async deleteDiscipline(id: number) {
    	return this.timetableClient.send('delete_discipline', {id})
    }

    //EditTimetable gateway controllers
    async allEditTimetable() {
    	return this.timetableClient.send('all_editTimetable', {})
    }
    async oneEditTimetable(id: number) {
    	return this.timetableClient.send('one_editTimetable', {id})
    }
    async createEditTimetable(dto: CreateEditTimetableDto) {
    	return this.timetableClient.send('create_editTimetable', {dto})
    }
    async updateEditTimetable(dto: UpdateEditTimetableDto) {
    	return this.timetableClient.send('update_editTimetable', {dto})
    }
    async deleteEditTimetable(id: number) {
    	return this.timetableClient.send('delete_editTimetable', {id})
    }

    //FullTimetable gateway controllers
    async allFullTimetable() {
    	return this.timetableClient.send('all_fullTimetable', {})
    }
    async oneFullTimetable(id: number) {
    	return this.timetableClient.send('one_fullTimetable', {id})
    }
    async createFullTimetable(dto: CreateFullTimetableDto) {
    	return this.timetableClient.send('create_fullTimetable', {dto})
    }
    async updateFullTimetable(dto: UpdateFullTimetableDto) {
    	return this.timetableClient.send('update_fullTimetable', {dto})
    }
    async deleteFullTimetable(id: number) {
    	return this.timetableClient.send('delete_fullTimetable', {id})
    }

    //Group gateway controllers
    async allGroup() {
    	return this.timetableClient.send('all_group', {})
    }
    async oneGroup(id: number) {
    	return this.timetableClient.send('one_group', {id})
    }
    async createGroup(dto: CreateGroupDto) {
    	return this.timetableClient.send('create_group', {dto})
    }
    async updateGroup(dto: UpdateGroupDto) {
    	return this.timetableClient.send('update_group', {dto})
    }
    async deleteGroup(id: number) {
    	return this.timetableClient.send('delete_group', {id})
    }

    //LoadTeach gateway controllers
    async allLoadTeach() {
    	return this.timetableClient.send('all_loadTeach', {})
    }
    async oneLoadTeach(id: number) {
    	return this.timetableClient.send('one_loadTeach', {id})
    }
    async createLoadTeach(dto: CreateLoadTeachDto) {
    	return this.timetableClient.send('create_loadTeach', {dto})
    }
    async updateLoadTeach(dto: UpdateLoadTeachDto) {
    	return this.timetableClient.send('update_loadTeach', {dto})
    }
    async deleteLoadTeach(id: number) {
    	return this.timetableClient.send('delete_loadTeach', {id})
    }

    //MaketTimetable gateway controllers
    async allMaketTimetable() {
    	return this.timetableClient.send('all_maketTimetable', {})
    }
    async oneMaketTimetable(id: number) {
    	return this.timetableClient.send('one_maketTimetable', {id})
    }
    async createMaketTimetable(dto: CreateMaketTimetableDto) {
    	return this.timetableClient.send('create_maketTimetable', {dto})
    }
    async updateMaketTimetable(dto: UpdateMaketTimetableDto) {
    	return this.timetableClient.send('update_maketTimetable', {dto})
    }
    async deleteMaketTimetable(id: number) {
    	return this.timetableClient.send('delete_maketTimetable', {id})
    }

    //Speciality gateway controllers
    async allSpeciality() {
    	return this.timetableClient.send('all_speciality', {})
    }
    async oneSpeciality(id: number) {
    	return this.timetableClient.send('one_speciality', {id})
    }
    async createSpeciality(dto: CreateSpecialityDto) {
    	return this.timetableClient.send('create_speciality', {dto})
    }
    async updateSpeciality(dto: UpdateSpecialityDto) {
    	return this.timetableClient.send('update_speciality', {dto})
    }
    async deleteSpeciality(id: number) {
    	return this.timetableClient.send('delete_speciality', {id})
    }

    //Student gateway controllers
    async allStudent() {
    	return this.timetableClient.send('all_student', {})
    }
    async oneStudent(id: number) {
    	return this.timetableClient.send('one_student', {id})
    }
    async createStudent(dto: CreateStudentDto) {
    	return this.timetableClient.send('create_student', {dto})
    }
    async updateStudent(dto: UpdateStudentDto) {
    	return this.timetableClient.send('update_student', {dto})
    }
    async deleteStudent(id: number) {
    	return this.timetableClient.send('delete_student', {id})
    }

    //Teacher gateway controllers
    async allTeacher() {
    	return this.timetableClient.send('all_teacher', {})
    }
    async oneTeacher(id: number) {
    	return this.timetableClient.send('one_teacher', {id})
    }
    async createTeacher(dto: CreateTeacherDto) {
    	return this.timetableClient.send('create_teacher', {dto})
    }
    async updateTeacher(dto: UpdateTeacherDto) {
    	return this.timetableClient.send('update_teacher', {dto})
    }
    async deleteTeacher(id: number) {
    	return this.timetableClient.send('delete_teacher', {id})
    }
}
