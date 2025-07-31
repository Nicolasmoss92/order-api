import { Inject, Injectable } from '@nestjs/common';
import { IOrderRepository } from 'src/core/ports/order.repository';
import { IGetOrderByIdUseCase } from './get-order-by-id.interface';
import { Order } from 'src/core/entities/order';
import { ExistsException } from 'src/core/exceptions';

@Injectable()
export class GetOrderByIdUseCase implements IGetOrderByIdUseCase {
  constructor(@Inject('OrderRepository') private orderRepository: IOrderRepository) {}

  async getById(id: string): Promise<Order> {
    const order = await this.orderRepository.getOrderById(id);

    if (!order) {
      throw new ExistsException();
    }

    return order;
  }
}
