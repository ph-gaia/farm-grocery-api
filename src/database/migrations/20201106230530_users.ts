import * as Knex from "knex";

const tableName = 'users'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: any) => {
        table.increments('id').primary()
        table.string('name', 90).notNullable()
        table.string('email', 90).notNullable()
        table.string('phone', 20)
        table.string('password', 60)
        table.string('type', 10).defaultTo("USER")
        table.boolean('active').defaultTo(1)
        table.datetime('created_at').defaultTo(knex.fn.now())
        table.datetime('updated_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName)
}
