import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller('game')
export class GameController {
  @Get()
  serveGame(@Res() res: Response): void {
    // Serve the game's HTML file
    res.sendFile(path.join(__dirname, '../../game/index.html'));
  }
}
