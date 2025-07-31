import { Inject, Injectable } from '@nestjs/common';
import { IOrderRepository } from 'src/core/ports/order.repository';
import { IUpdateOrderUseCase } from './update-order-by-id.interface';
import { Order } from 'src/core/entities/order';

@Injectable()
export class UpdateOrderUseCase implements IUpdateOrderUseCase {
  constructor(@Inject('OrderRepository') private orderRepository: IOrderRepository) {}

  async update(body: Order): Promise<void> {
    await this.orderRepository.update(body);
  }
}
