import { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost', // ou 127.0.0.1
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'pet_service',
  },
  searchPath: ['public'], // ou outro se estiver usando schema diferente
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/infrastructure/database/migrations',
  },
};

export default config;
