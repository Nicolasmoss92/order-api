import { Order } from '../../../../core/entities/order';
import { OrderItem } from '../../../../core/entities/order-item';
import { CreateOrderDto } from './create-order.dto';

export class OrderMapper {
  static fromCreateDtoToEntity(dto: CreateOrderDto): Order {
    const items = dto.items.map(
      (item) =>
        new OrderItem({
          productId: item.productId,
          name: item.name,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
        }),
    );

    return new Order({
      userId: dto.userId,
      items,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
