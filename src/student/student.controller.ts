import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.scehma';

@Controller('student')
export class StudentController {
    constructor (private readonly studentService: StudentService) {}

    @Post()
    async addStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data);
    }
    @Get('all')
    getAllStudent(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
   getStudentById(@Param('id') id: string) {    
   return this.studentService.getStudentById(id);
   }
}
