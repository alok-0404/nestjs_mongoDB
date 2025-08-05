import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.scehma';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }
  @Get('all')
  async getAllStudent() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.updateStudent(id, data);
  }

  @Patch(':id')
  async patchStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.partialUpdateStudent(id, data);
  }

   @Delete(':id')
  async deleteStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.partialUpdateStudent(id, data);
  }
}
