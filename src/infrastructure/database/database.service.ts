import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import knex, { Knex } from 'knex';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private knexInstance: Knex;

  constructor() {
    this.knexInstance = knex({
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
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
  }

  getConnection(): Knex {
    return this.knexInstance;
  }

  async onModuleInit() {
    console.log('DatabaseService initialized');
  }

  async onModuleDestroy() {
    await this.knexInstance.destroy();
    console.log('DatabaseService connection closed');
  }
}
