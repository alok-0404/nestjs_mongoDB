import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { studentDocument, Student, StudentSchema } from './student.scehma';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])
    ]
})
export class StudentModule {}
