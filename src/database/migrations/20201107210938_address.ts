import * as Knex from "knex";

const tableName = 'address'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: any) => {
        table.increments('id').primary()
        table.string('title', 20).notNullable()
        table.string('zip_code', 9).notNullable()
        table.string('state', 20).notNullable()
        table.string('city', 60).notNullable()
        table.string('street', 60)
        table.string('number', 10)
        table.string('complement', 150)
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName)
}

