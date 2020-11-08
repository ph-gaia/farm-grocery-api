import { NextFunction, Request, Response } from 'express';

import handleControllerError from './utils/handleControllerError';
import addressRepository from '../repository/Address';

const create = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { body } = req;
    const address = await addressRepository.create(body);

    return res.status(201).send({ address });

  } catch (err) {
    handleControllerError(err, next);
  }
};

const read = async (_req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const address = await addressRepository.read();

    return res.status(200).send({ address });

  } catch (err) {
    handleControllerError(err, next);
  }
};

const readOne = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    const address = await addressRepository.readOne(id);

    if (!address) {
      return res.status(404).send({ error: 'Address not found.' });
    }

    return res.status(200).send({ address });

  } catch (err) {
    handleControllerError(err, next);
  }
};

const update = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    const address = await addressRepository.update(id, { ...req.body });

    if (!address) {
      return res.status(404).send({ error: 'Address not found.' });
    }

    return res.status(200).send({ address });

  } catch (err) {
    handleControllerError(err, next);
  }
};

const remove = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    const address = await addressRepository.delete(id);

    if (!address) {
      return res.status(404).send({ error: 'Address not found.' });
    }

    return res.status(204).send({ address });

  } catch (err) {
    handleControllerError(err, next);
  }
};

export default {
  create,
  read,
  readOne,
  update,
  delete: remove,
};