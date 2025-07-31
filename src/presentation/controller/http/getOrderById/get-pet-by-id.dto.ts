import { IsNotEmpty, IsUUID } from 'class-validator';
export class GetOrderByIdDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
