import { Entity } from './entity';

export class OrderItem extends Entity<OrderItem> {
  public readonly productId: string;
  public name: string;
  public quantity: number;
  public unitPrice: number;

  constructor(props: Partial<OrderItem>) {
    super(props);
  }

  protected validate(props: Partial<OrderItem>): void {
    if (!props.productId) {
      throw new Error('OrderItem must have a productId.');
    }

    if (!props.name) {
      throw new Error('OrderItem must have a name.');
    }

    if (!props.quantity || props.quantity <= 0) {
      throw new Error('OrderItem must have a valid quantity.');
    }

    if (!props.unitPrice || props.unitPrice < 0) {
      throw new Error('OrderItem must have a valid unit price.');
    }
  }

  public getTotal(): number {
    return this.unitPrice * this.quantity;
  }
}
