import User from '../models/User'

const read = async () => {
  try {
    return User.query();
  } catch (err) {
    throw err;
  }
};

const readOne = async (id: string) => {
  try {
    return User.query().findById(id);
  } catch (err) {
    throw err;
  }
};

const create = async (data: User) => {
  try {
    return User.query().insert(data);
  } catch (err) {
    throw err;
  }
};

const update = async (id: string, data: User) => {
  try {
    return User.query()
      .findById(id)
      .patch(data)
  } catch (err) {
    throw err;
  }
};

const remove = async (id: string) => {
  try {
    return User.query().deleteById(id);
  } catch (err) {
    throw err;
  }
};

export default {
  create,
  read,
  readOne,
  update,
  delete: remove,
};