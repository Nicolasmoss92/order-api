import { Module } from '@nestjs/common';

import { KnexModule } from 'src/infrastructure/database/knex.module';
import { OrderRepository } from '../order';

@Module({
  imports: [KnexModule],
  providers: [
    {
      provide: 'OrderRepository',
      useClass: OrderRepository,
    },
  ],
  exports: ['OrderRepository'],
})
export class RepositoriesModule {}
