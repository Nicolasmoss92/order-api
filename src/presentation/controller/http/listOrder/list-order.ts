import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
import { ListOrdersResponse } from './list-order.response';
import { IListOrdersUseCase } from 'src/core/useCases/listOrders/list-order.interface';

@Controller('v1')
export class ListOrdersController {
  constructor(
    @Inject('ListOrdersUseCase') private readonly listOrdersUseCase: IListOrdersUseCase,
  ) {}

  @Get('/orders')
  @HttpCode(200)
  async handle(): Promise<ListOrdersResponse[]> {
    return await this.listOrdersUseCase.list();
  }
}
