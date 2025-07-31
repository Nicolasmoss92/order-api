import { Controller, Get, HttpCode, Inject, Param } from '@nestjs/common';

import { IGetOrderByIdUseCase } from 'src/core/useCases/getOrderById/get-order-by-id.interface';
import { GetOrderByIdDto } from './get-pet-by-id.dto';
import { GetOrderByIdResponse } from './get-order-by-id-response.dto';

@Controller('v1')
export class GetOrderByIdController {
  constructor(
    @Inject('GetOrderByIdUseCase') private readonly getOrderByIdUseCase: IGetOrderByIdUseCase,
  ) {}

  @Get('/orders/:id')
  @HttpCode(200)
  async handle(@Param() getOrderById: GetOrderByIdDto): Promise<GetOrderByIdResponse> {
    const { id } = getOrderById;
    const order = await this.getOrderByIdUseCase.getById(id);

    return order;
  }
}
