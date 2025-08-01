import { OrderStatus } from '../enums/order-status';
import { Entity } from './entity';

export class Order extends Entity<Order> {
  public readonly id: string;
  public userId: string;
  public totalAmount: number;
  public status: OrderStatus;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Partial<Order>) {
    super(props);
  }

  protected validate(props: Partial<Order>): void {
    if (!props.userId) {
      throw new Error('Order must have a userId.');
    }

    if (props.totalAmount == null || props.totalAmount < 0) {
      throw new Error('Order must have a valid totalAmount.');
    }

    this.status = props.status ?? OrderStatus.CREATED;
  }
}
