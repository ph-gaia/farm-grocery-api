import addressModel from '../models/Address'

const read = async () => {
  try {
    return addressModel.query();
  } catch (err) {
    throw err;
  }
};

const readOne = async (id: string) => {
  try {
    return addressModel.query().findById(id);
  } catch (err) {
    throw err;
  }
};

const create = async (data: addressModel) => {
  try {
    return addressModel.query().insert(data);
  } catch (err) {
    throw err;
  }
};

const update = async (id: string, data: addressModel) => {
  try {
    return addressModel.query()
      .findById(id)
      .patch(data)
  } catch (err) {
    throw err;
  }
};

const remove = async (id: string) => {
  try {
    return addressModel.query().deleteById(id);
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