import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FortyTwoStrategy } from './42.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { UserController } from 'src/user/user.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';



@Module({
  imports: [ConfigModule.forRoot() ,PassportModule.register({defaultStrategy: '42'}), UserModule],
  controllers: [AuthController, UserController],
  providers: [AuthService, FortyTwoStrategy , UserService, JwtService]
})
export class AuthModule {}
