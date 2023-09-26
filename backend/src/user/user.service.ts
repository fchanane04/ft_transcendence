import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtservice: JwtService,
  ) {}

  async createUser(user: User): Promise<any> {
    // console.log(user);
    const use = await this.userRepository.findOne({ where: { username: user.username } });
    if (!use){
    this.userRepository.save(user);
    const payload = { username: user.username, email: user.email };
    return {
      access_token: this.jwtservice.sign(payload, {secret: "f2a45c8e5d6a32b1e4d7c9f0b3e5d2f4"}),
    };

    }
    else
    {
      const payload = { username: user.username, email: user.email };
      return {
        access_token: this.jwtservice.sign(payload,{secret: "f2a45c8e5d6a32b1e4d7c9f0b3e5d2f4"}),
      };
    }
  }

  async removeUser(id: number): Promise<void> {
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.remove(user);
  }

  async getUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async updateUser(id :number, updateData :Partial<User>): Promise<User>{
    const user = await this.userRepository.findOneBy({id});
    if (!user)
      throw new NotFoundException('user not found assi mohammed');
    Object.assign(user, updateData);
    return this.userRepository.save(user);
  }
}