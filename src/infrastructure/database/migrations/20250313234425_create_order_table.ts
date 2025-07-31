import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('user_id').notNullable();
    table.decimal('total_amount', 10, 2).notNullable();
    table
      .enu('status', [
        'created',
        'payment_processing',
        'payment_approved',
        'payment_rejected',
        'ready_for_delivery',
        'delivered',
        'failed',
      ])
      .notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('orders');
}
