import { IsNotEmpty, IsUUID } from 'class-validator';
export class DeleteOrderByIdDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
