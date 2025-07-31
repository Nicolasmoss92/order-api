import { Body, Controller, HttpCode, Inject, Put, Param } from '@nestjs/common';
import { UpdateOrderDto } from './update-order.dto';
import { IUpdateOrderUseCase } from 'src/core/useCases/updateOrder/update-order-by-id.interface';

@Controller('v1')
export class UpdateOrderByIdController {
  constructor(
    @Inject('UpdateOrderUseCase') private readonly updateOrderByIdUseCase: IUpdateOrderUseCase,
  ) {}

  @Put('/update/order/:id')
  @HttpCode(204)
  async handle(@Param('id') id: string, @Body() body: UpdateOrderDto): Promise<void> {
    await this.updateOrderByIdUseCase.update(id, body);
  }
}
