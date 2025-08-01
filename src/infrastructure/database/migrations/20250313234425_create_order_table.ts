import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('user_id').notNullable();
    table.decimal('total_amount', 10, 2).notNullable(); // 10 dígitos no total, 2 após o ponto
    table
      .enu('status', [
        'created',
        'payment_processing',
        'payment_approved',
        'payment_rejected',
        'ready_for_delivery',
        'delivered',
        'failed',
      ], {
        useNative: true,
        enumName: 'order_status', // boa prática: nomeia o enum no PostgreSQL
      })
      .notNullable();
    table.timestamps(true, true); // created_at e updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('orders');
  await knex.raw('DROP TYPE IF EXISTS order_status'); // remove o tipo enum do PostgreSQL
}
