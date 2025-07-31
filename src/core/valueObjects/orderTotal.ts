import { OrderItem } from '../entities/order-item';

export class OrderTotal {
  private readonly total: number;

  constructor(items: OrderItem[]) {
    if (!items || items.length === 0) {
      throw new Error('OrderTotal requires at least one item.');
    }

    this.total = items.reduce((acc, item) => acc + item.getTotal(), 0);
  }

  get value(): number {
    return this.total;
  }
}
