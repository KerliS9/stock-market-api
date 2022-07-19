import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/httpException';

export const inputValue = (req: Request, _res: Response, next: NextFunction) => {
  const input = Joi.object().keys({
    costumerId: Joi.number().integer().required(),
    inputValue: Joi.number().greater(0).required(),
  });
  const { error } = input.validate(req.body);
  if (error) {
    const { type, message } = error.details[0];
    const status = type === 'any.required' ? 400 : 422;
    throw new HttpException(status, message);
  }
  next();
};

export const outputValue = (req: Request, _res: Response, next: NextFunction) => {
  const output = Joi.object().keys({
    costumerId: Joi.number().integer().required(),
    outputValue: Joi.number().greater(0).required(),
  });
  const { error } = output.validate(req.body);
  if (error) {
    const { type, message } = error.details[0];
    const status = type === 'any.required' ? 400 : 422;
    throw new HttpException(status, message);
  }
  next();
};
