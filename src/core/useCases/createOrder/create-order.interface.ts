import { Order } from '../../entities/order';

export interface ICreateOrderUseCase {
  create(body: Order): Promise<any>;
}
