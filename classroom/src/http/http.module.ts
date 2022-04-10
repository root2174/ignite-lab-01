import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { CoursesResolver } from 'src/graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from 'src/graphql/resolvers/enrollments.resolver';
import { StudentsResolver } from 'src/graphql/resolvers/students.resolver';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver
    })
  ],
  providers: [
    // Services
    StudentsService,
    CoursesService,
    EnrollmentsService,

    // Resolvers
    StudentsResolver,
    CoursesResolver,
    EnrollmentsResolver
  ]
})
export class HttpModule {}
