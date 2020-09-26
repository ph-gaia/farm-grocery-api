import express, { Request, Response } from 'express';

const router = express.Router();

router.get(
  '/',
  (_req: Request, res: Response): Response =>
    res.status(200).send({
      message: 'UHUL! The API is UP && RUNNING!!!',
    }),
);


export default router;
