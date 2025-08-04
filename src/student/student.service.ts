import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';//injectmodel schema ko rejister krnwane ke liye hota h
import { Student, studentDocument } from './student.scehma';
import { Model } from 'mongoose';

@Injectable()
export class StudentService { 
    constructor(
        @InjectModel(Student.name) private studentModel: Model<studentDocument>
    ) {}

    async createStudent(data: Partial<Student>): Promise<Student>{
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }
}