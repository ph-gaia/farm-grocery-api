import * as Knex from "knex";

const tableName = 'users'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table: any) => {
    table.increments('id').primary()
    table.string('name', 90)
    table.string('email', 90)
    table.string('phone', 20)
    table.string('password', 60)
    table.string('type', 10)
    table.boolean('active')
    table.datetime('created_at')
    table.datetime('updated_at')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName)
}