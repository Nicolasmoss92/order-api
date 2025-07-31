export enum OrderStatus {
  CREATED = 'created',
  PAYMENT_PROCESSING = 'payment_processing',
  PAYMENT_APPROVED = 'payment_approved',
  PAYMENT_REJECTED = 'payment_rejected',
  READY_FOR_DELIVERY = 'ready_for_delivery',
  DELIVERED = 'delivered',
  FAILED = 'failed',
}
