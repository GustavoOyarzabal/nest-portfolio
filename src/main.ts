import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Habilitar CORS
  app.enableCors({
    origin: [
      // 'http://localhost:3000',
      'https://www.gustavooyarzabal.com',
      'https://front-profolio.vercel.app',
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3002, '0.0.0.0');
  console.log(`App running on port ${process.env.PORT || 3002}`);
}
bootstrap();
