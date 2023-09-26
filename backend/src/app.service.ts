// app.service.ts

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user/user.entity'; // Import your user entity
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async testDatabaseConnection(): Promise<any> {
    try {
      const users = await this.userRepository.find(); // Perform a simple query
      return users;
    } catch (error) {
      throw error;
    }
  }
}
