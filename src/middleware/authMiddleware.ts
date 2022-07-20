import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyJWTToken } from '../helpers/generateToken';
import HttpException from '../helpers/httpException';
import 'express-async-errors';

export default {
  authentication: async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'Token not found');
    }
    try {
      const payload = verifyJWTToken(authHeader);
      res.locals.user = payload;
      next();
    } catch (e) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'Invalid token');
    }
  },
};
