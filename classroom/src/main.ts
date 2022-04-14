import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Since this service will only consume messages from kafka,
  // we can initialize the kafka client here.
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'classroom',
        brokers: ['localhost:29092']
      }
    }
  });

  app.startAllMicroservices().then(() => {
    console.log('[Classroom] Microservice running!');
  });

  app.listen(3334).then(() => {
    console.log('[Classroom] server running!');
  });
}
bootstrap();
