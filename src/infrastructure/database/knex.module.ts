import { Module, Global } from '@nestjs/common';
import knex, { Knex } from 'knex';
import { DatabaseService } from '../database/database.service';

@Global()
@Module({
  providers: [
    {
      provide: 'KnexConnection',
      useFactory: (): Knex => {
        return knex({
          client: 'pg',
          connection: {
            host: 'localhost',
            port: 5432,
            user: 'pet_service',
            password: '1234',
            database: 'pet_service',
          },
          migrations: {
            tableName: 'migrations',
            directory: '../../migrations',
          },
          seeds: {
            directory: '../../seeds',
          },
        });
      },
    },
    DatabaseService,
  ],
  exports: ['KnexConnection', DatabaseService],
})
export class KnexModule {}
