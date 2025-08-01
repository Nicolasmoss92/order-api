import { Order } from "src/core/entities/order";
import { CreateOrderDto } from "./create-order.dto";
export class OrderMapper {
  static fromCreateDtoToEntity(dto: CreateOrderDto): Order {
    return new Order({
      userId: dto.userId,
      totalAmount: dto.totalAmount,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
