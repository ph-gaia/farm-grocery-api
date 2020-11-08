import { Model } from 'objection';

const User = require('./User')
const knex = require('../database/index');
Model.knex(knex);

class Address extends Model {
  id!: number
  title!: string
  zip_code!: string
  state!: string
  city!: string
  street!: string
  number!: string
  complement!: string
  user_id!: number

  static get tableName() {
    return 'address';
  }

  static jsonSchema = {
    type: 'object',
    required: ['title', 'zip_code', 'state', 'city', 'street', 'number', 'user_id'],

    properties: {
      id: { type: 'integer' },
      title: { type: 'string', minLength: 3, maxLength: 90 },
      zip_code: { type: 'string', minLength: 8, maxLength: 9 },
      state: { type: 'string', minLength: 2 },
      city: { type: 'string', minLength: 2, maxLength: 20 },
      street: { type: 'string', minLength: 2, maxLength: 60 },
      complement: { type: 'string' },
      user_id: { type: 'integer' }
    }
  }

  static relationMappings = () => ({
    team: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: 'address.user_id',
        to: 'User.id'
      }
    }
  })
}

export default Address;