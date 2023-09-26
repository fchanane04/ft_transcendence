import { Controller , Get, Param, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { UserService} from './user.service';
import { User } from './user.entity';
import { AuthGuard } from './jwt.guard';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    
    @Get()
    @UseGuards(AuthGuard)
    async getUser() : Promise<User[]> {
      return await this.userService.getUser();
    }
    
    @Delete(':id')
    @UseGuards(AuthGuard)
    async removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
    }
    
    @Put(':id')
    @UseGuards(AuthGuard)
    async updateUser(@Param('id') id: number, @Body() updateUser: Partial<User>){
      return await this.userService.updateUser(id, updateUser);
    }
}
