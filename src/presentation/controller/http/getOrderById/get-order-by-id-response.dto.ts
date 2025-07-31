export class GetOrderByIdResponse {
  id: string;
  userId: string;
  totalAmount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  items: {
    productId: string;
    name: string;
    quantity: number;
    unitPrice: number;
  }[];
}
