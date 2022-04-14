import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateStudentParams {
  authUserId: string;
}
@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  createStudent({ authUserId }: CreateStudentParams) {
    return this.prisma.student.create({
      data: {
        authUserId
      }
    });
  }

  listAllStudents() {
    return this.prisma.student.findMany();
  }

  getStudentByAuthUserId(authUserId: string) {
    return this.prisma.student.findUnique({
      where: {
        authUserId
      }
    });
  }

  getStudentById(id: string) {
    return this.prisma.student.findUnique({
      where: {
        id
      }
    });
  }
}
