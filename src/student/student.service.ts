import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; //injectmodel schema ko rejister krnwane ke liye hota h
import { Student, studentDocument } from './student.scehma';
import { Model } from 'mongoose';
import { exec } from 'child_process';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<studentDocument>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async getStudentById(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  async partialUpdateStudent(id: string,data: Partial<Student>): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async updateStudent (id: string,data: Partial<Student>): Promise<Student | null> {
    const updated = await this.studentModel.findByIdAndUpdate(id,{
        name : data.name ?? null,
        age: data.age?? null,
        email: data.email?? null
    },{overwrite: true, new: true}).exec();
    return updated;
    // return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deletStudent(id: string): Promise<Student | null> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
