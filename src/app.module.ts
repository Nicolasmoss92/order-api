import { Module } from '@nestjs/common';
import { KnexModule } from './infrastructure/database/knex.module';
import { AuthController } from './infrastructure/auth/auth';
import { AuthModule } from './infrastructure/auth/auth.module';
import { AuthService } from './infrastructure/auth/auth.service';
import { CreateOrderController } from './presentation/controller/http/createOrder/create-order';
import { ListOrdersController } from './presentation/controller/http/listOrder/list-order';
import { DeleteOrderController } from './presentation/controller/http/deleteOrderById/delete-order-by-id';
import { GetOrderByIdController } from './presentation/controller/http/getOrderById/get-by-id';
import { UpdateOrderByIdController } from './presentation/controller/http/updateOrder/update-order';
import { CreateOrderUsecase } from './core/useCases/createOrder/create-order.usecase';
import { ListOrdersUseCase } from './core/useCases/listOrders/list-order.usecase';
import { GetOrderByIdUseCase } from './core/useCases/getOrderById/get-order-by-id.usecase';
import { DeleteOrderByIdUseCase } from './core/useCases/deleteOrderById/delete-order-by-id.usecase';
import { UpdateOrderUseCase } from './core/useCases/updateOrder/update-order-by-id.usecase';
import { RepositoriesModule } from './infrastructure/repositories/module/repositories.module';

@Module({
  imports: [KnexModule, RepositoriesModule, AuthModule],
  controllers: [
    CreateOrderController,
    ListOrdersController,
    DeleteOrderController,
    GetOrderByIdController,
    UpdateOrderByIdController,
    AuthController,
  ],
  providers: [
    {
      provide: 'CreateOrderUseCase',
      useClass: CreateOrderUsecase,
    },
    {
      provide: 'ListOrdersUseCase',
      useClass: ListOrdersUseCase,
    },
    {
      provide: 'GetOrderByIdUseCase',
      useClass: GetOrderByIdUseCase,
    },
    {
      provide: 'DeleteOrderByIdUseCase',
      useClass: DeleteOrderByIdUseCase,
    },
    {
      provide: 'UpdateOrderUseCase',
      useClass: UpdateOrderUseCase,
    },
    {
      provide: 'AuthService',
      useClass: AuthService,
    },
  ],
})
export class AppModule {}
