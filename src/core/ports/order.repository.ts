import { Order } from '../entities/order';

export interface IOrderRepository {
  create(body: Order): Promise<any>;
  all(): Promise<Order[]>;
  getOrderById(id: string): Promise<Order>;
  deleteById(id: string): Promise<void>;
  update(pet: Order): Promise<void>;
}
