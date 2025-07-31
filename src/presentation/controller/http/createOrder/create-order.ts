import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ICreateOrderUseCase } from '../../../../core/useCases/createOrder/create-order.interface';
import { CreateOrderDto } from './create-order.dto';
import { OrderMapper } from './pet.mapper';

@Controller('v1')
export class CreateOrderController {
  constructor(
    @Inject('CreateOrderUseCase') private readonly createOrderUseCase: ICreateOrderUseCase,
  ) {}

  @Post('/order')
  @HttpCode(204)
  async handle(@Body() body: CreateOrderDto): Promise<void> {
    const order = OrderMapper.fromCreateDtoToEntity(body);

    await this.createOrderUseCase.create(order);
  }
}
