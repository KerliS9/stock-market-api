import 'express-async-errors';
import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/httpException';

export const tradeValidation = (req: Request, _res: Response, next: NextFunction) => {
  const body = Joi.object().keys({
    customerId: Joi.number().integer().greater(0).required(),
    assetId: Joi.number().integer().greater(0).required(),
    quantity: Joi.number().integer().greater(0).required(),
  });
  const { error } = body.validate(req.body);
  if (error) {
    const { type, message } = error.details[0];
    const status = type === 'any.required' ? 400 : 422;
    throw new HttpException(status, message);
  }
  next();
};

export default tradeValidation;
