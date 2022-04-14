import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';
import { PurchasesController } from './controllers/purchases.controller';

@Module({
  // HTTP
  // Kafka interceptors
  controllers: [PurchasesController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
  imports: [DatabaseModule]
})
export class MessagingModule {}
