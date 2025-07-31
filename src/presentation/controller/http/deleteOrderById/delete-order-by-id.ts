import { Controller, Delete, HttpCode, Inject, Param } from '@nestjs/common';
import { DeleteOrderByIdDto } from './delete-order-by-id.dto';
import { IDeleteOrderByIdUseCase } from '../../../../core/useCases/deleteOrderById/delete-order-by-id.interface';

@Controller('v1')
export class DeleteOrderController {
  constructor(
    @Inject('DeleteOrderByIdUseCase') private deleteOrderByIdUseCase: IDeleteOrderByIdUseCase,
  ) {}

  @Delete('/delete/order/:id')
  @HttpCode(204)
  async handle(@Param() deleteById: DeleteOrderByIdDto): Promise<any> {
    const { id } = deleteById;

    return await this.deleteOrderByIdUseCase.deleteById(id);
  }
}
