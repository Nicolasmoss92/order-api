import { Inject, Injectable } from '@nestjs/common';
import { ICreateOrderUseCase } from './create-order.interface';
import { ExistsException } from 'src/core/exceptions';
import { Order } from 'src/core/entities/order';
import { IOrderRepository } from 'src/core/ports/order.repository';

@Injectable()
export class CreateOrderUsecase implements ICreateOrderUseCase {
  constructor(@Inject('OrderRepository') private orderRepository: IOrderRepository) {}

  async create(body: Order): Promise<void> {
    const existingOrder = await this.orderRepository.getOrderById(body.id);

    if (existingOrder) {
      throw new ExistsException();
    }

    await this.orderRepository.create(body);
  }
}
