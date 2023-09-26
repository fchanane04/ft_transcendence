import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host:  'localhost',
    port:  5432,
    username:  'aristo',
    password:  '1234',
    database: 'post',
    entities: [User], // List your entity classes here
    synchronize: true, // Only set this to true in development; it auto-creates tables
  }),
  TypeOrmModule.forFeature([User]),
  UserModule,
],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
