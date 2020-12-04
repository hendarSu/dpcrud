import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('orders')
export class OrderController {
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload : { service : string }) {
        const order  = new OrderService();
        await order.create(payload.service);
        return true;
    }
}