import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, profile} from 'passport-42';
import { AuthService } from './auth.service'; // Your authentication service
import { ConfigService } from '@nestjs/config';
import { promises } from 'fs';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor(private readonly authService: AuthService, private readonly configService: ConfigService) {
    super({
      clientID: 'u-s4t2ud-65ab0977cffd9a19029be468f89c9fb15afa3b136b97424531f3c6fd8a480006',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/callback',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: profile): Promise<any> {
    const {name, emails, _json} = profile;
    const firstname = name?.givenName
    const user = {
        username:firstname,
        email:emails[0].value,
        avatar_url:_json.image.versions.small,
    }
    return user;
  }
}