import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api/star-wapp');
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001', // ajustalo a tu URL de frontend
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
