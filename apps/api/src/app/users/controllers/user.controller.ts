import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload : { service : string }) {
        const user  = new UserService();
        await user.create(payload.service);
        return true;
    }
}