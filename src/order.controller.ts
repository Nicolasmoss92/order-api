import { Controller, Post, Body } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Inject, OnModuleInit } from '@nestjs/common';

@Controller('orders')
export class OrderController implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('v1-order.order_created');
  }

  @Post()
  async createOrder(@Body() body: any) {
    await this.kafkaClient.emit('v1-order.order_created', body);
    return { message: 'Order created and event published' };
  }
}
