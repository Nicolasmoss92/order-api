import { OrderStatus } from '../enums/order-status';
import { OrderTotal } from '../valueObjects/orderTotal';
import { Entity } from './entity';
import { OrderItem } from './order-item';

export class Order extends Entity<Order> {
  public readonly id: string;
  public userId: string;
  public items: OrderItem[];
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

    if (!props.items || props.items.length === 0) {
      throw new Error('Order must have at least one item.');
    }

    this.items = props.items;
    this.totalAmount = new OrderTotal(this.items).value;

    if (!props.status) {
      this.status = OrderStatus.CREATED;
    }
  }
}
