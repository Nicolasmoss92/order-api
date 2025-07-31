import { Inject, Injectable } from '@nestjs/common';
import { IDeleteOrderByIdUseCase } from './delete-order-by-id.interface';
import { IOrderRepository } from '../../ports/order.repository';
import { ExistsException } from 'src/core/exceptions';

@Injectable()
export class DeleteOrderByIdUseCase implements IDeleteOrderByIdUseCase {
  constructor(@Inject('OrderRepository') private orderRepository: IOrderRepository) {}

  async deleteById(id: string): Promise<void> {
    const order = await this.orderRepository.getOrderById(id);
    if (!order) {
      throw new ExistsException();
    }
    await this.orderRepository.deleteById(id);
  }
}
