import { UpdateOrderDto } from 'src/presentation/controller/http/updateOrder/update-order.dto';

export interface IUpdateOrderUseCase {
  update(updateOrder: UpdateOrderDto): Promise<void>;
}
