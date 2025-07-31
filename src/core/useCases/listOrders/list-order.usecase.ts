import { Inject, Injectable } from '@nestjs/common';
import { IOrderRepository } from 'src/core/ports/order.repository';
import { IListOrdersUseCase } from './list-order.interface';
import { Order } from 'src/core/entities/order';
import { ExistsException } from 'src/core/exceptions';

@Injectable()
export class ListOrdersUseCase implements IListOrdersUseCase {
  constructor(@Inject('OrderRepository') private orderRepository: IOrderRepository) {}

  async list(): Promise<Order[]> {
    const order = await this.orderRepository.all();

    if (!order) {
      throw new ExistsException();
    }

    return order;
  }
}
