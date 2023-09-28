import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  // Landing page route
  @Get()
  landingPage(@Res() res: Response): void {
    res.sendFile('/usr/src/app/src/game/landingPage.html');
  }

  // Other routes and actions
}