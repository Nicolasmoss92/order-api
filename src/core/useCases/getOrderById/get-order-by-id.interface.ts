import { Order } from "src/core/entities/order";


export interface IGetOrderByIdUseCase {
  getById(id: string): Promise<Order>;
}
