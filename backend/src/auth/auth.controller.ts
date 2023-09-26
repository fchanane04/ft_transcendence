import { Controller, Get, Delete, Param, Req, Res, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,private readonly userService: UserService ) {}

  @Get('42')
  @UseGuards(AuthGuard('42'))
  async fortyTwoLogin() {
    console.log('im here');
    // This route will initiate the 42 authentication flow
  }

  @Get('callback')
  @UseGuards(AuthGuard('42'))
  async fortyTwoCallback(@Req() req, @Res({ passthrough: true }) res) {
    console.log(req.user);
    console.log("the cookies is: ", req.cookies.access_Token);
    const userData = req.user;

    const newUser = new User();
    newUser.username = userData.username;
    newUser.email = userData.email;

    const savedUser = await this.userService.createUser(newUser);
    res.cookie('access_Token', savedUser.access_token, {
      //httpOnly: true,
    });
    res.json(savedUser);
  }
}
