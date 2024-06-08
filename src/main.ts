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

  app.enableCors({
    origin: [
      'https://www.gustavooyarzabal.com/',
      'https://gustavooyarzabal.com',
      'https://front-profolio.vercel.app',
      'https://gustavooyarzabal.com',
      'http://gustavooyarzabal.com',
      'http://www.gustavooyarzabal.com',
    ],
    methods: 'GET,PUT,POST,DELETE,OPTIONS,PATCH,HEAD',
    credentials: true,
    allowedHeaders:
      'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
  });

  await app.listen(process.env.PORT || 3002, '0.0.0.0');
  console.log(`App running on port ${process.env.PORT || 3002}`);
}
bootstrap();
