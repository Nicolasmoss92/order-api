import { Module } from '@nestjs/common';

import { KnexModule } from 'src/infrastructure/database/knex.module';

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
