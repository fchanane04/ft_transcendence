import {CanActivate, ExecutionContext, Injectable, UnauthorizedException, } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: "f2a45c8e5d6a32b1e4d7c9f0b3e5d2f4",
          }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        console.log(payload);
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        console.log(token);
        return type === 'Bearer' ? token : undefined;
      }
    }