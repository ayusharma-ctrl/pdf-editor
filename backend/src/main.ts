import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  // setting up cors policy
  app.enableCors({
    origin: configService.get<string>('ALLOWED_ORIGINS'),
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type, Authorization, x-app-secret',
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(port);
}
bootstrap();
