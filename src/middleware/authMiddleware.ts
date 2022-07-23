import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IPayload } from '../interfaces/login';
import { verifyJWTToken } from '../helpers/generateToken';
import HttpException from '../helpers/httpException';

export default {
  authentication: async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'Token not found');
    }
    try {
      const payload = verifyJWTToken(authHeader) as IPayload;
      res.locals.id = payload.id;
      next();
    } catch (e) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'Invalid token');
    }
  },
};
