import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {constructor(private readonly appService: AppService) {}

@Get('test/database')
async testDatabaseConnection() {
  try {
    const result = await this.appService.testDatabaseConnection();
    return { message: 'Connected to the database', result };
  } catch (error) {
    return { message: 'Database connection failed', error: error.message };
  }
}
}
