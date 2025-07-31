import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Order } from 'src/core/entities/order';
import { IOrderRepository } from 'src/core/ports/order.repository';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

  async create(body: Order): Promise<string> {
    const [inserted] = await this.knex('orders').insert(body).returning('id');
    return inserted.toString();
  }

  async all(): Promise<Order[]> {
    return this.knex('orders').select('*');
  }

  async getOrderById(id: string): Promise<Order> {
    return this.knex('orders').where('id', id).first();
  }

  async update(body: Order): Promise<void> {
    const [updated] = await this.knex('orders')
      .where('id', body.id)
      .update({
        userId: body.userId,
        status: body.status,
        totalPrice: body.totalAmount,
        updated_at: new Date(),
      })
      .returning('*');

    return updated;
  }

  async deleteById(id: string): Promise<void> {
    await this.knex('orders').where('id', id).delete();
  }
}
