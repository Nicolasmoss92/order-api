import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID, Min, IsEnum } from 'class-validator';
import { OrderStatus } from 'src/core/enums/order-status';

export class UpdateOrderDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @ApiProperty({ enum: OrderStatus })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
