import { Order } from 'src/core/entities/order';

export interface IListOrdersUseCase {
  list(): Promise<Order[]>;
}
