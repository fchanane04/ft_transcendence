import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { AppModule } from 'src/app.module';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard } from './jwt.guard';


@Module({
  imports:[TypeOrmModule.forFeature([User]), PassportModule.register(
    {defaultStrategy: 'jwt'
  }), JwtModule.register({
    secret: "f2a45c8e5d6a32b1e4d7c9f0b3e5d2f4",
    signOptions: {
      expiresIn: '1h'
    }

  })],
  exports: [TypeOrmModule],
  controllers: [UserController,],
  providers: [UserService,JwtService, AuthGuard],
})
export class UserModule {}
