import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // Import your existing AppController


@Module({
  controllers: [AppController], // Register both controllers
  //providers: [AppService],
})
export class AppModule {}