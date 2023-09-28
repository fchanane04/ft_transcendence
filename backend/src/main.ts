import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve the entire "game" directory as static files
  app.use('/game', express.static('/usr/src/app/src/game'));

  // Rest of your Nest.js configuration

  await app.listen(3000);
}

bootstrap();