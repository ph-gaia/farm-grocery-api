import { Model } from 'objection';

const knex = require('../database/index');
Model.knex(knex);

class User extends Model {
  id!: number
  name!: string
  email!: string
  phone!: string
  type!: string

  static get tableName() {
    return 'users';
  }

  static jsonSchema = {
    type: 'object',
    required: ['name', 'email', 'phone', 'type'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 3, maxLength: 90 },
      email: { type: 'string', minLength: 10, maxLength: 90 },
      phone: { type: 'string', minLength: 9, maxLength: 20 },
      type: { type: 'string', minLength: 9, maxLength: 20, enum: ["USER", "SELLER"] }
    }
  }

  static relationMappings = () => ({})
}

export default User;