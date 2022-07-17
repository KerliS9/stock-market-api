import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/httpException';

export default {
  error: (err: Error, _req: Request, res: Response, next: NextFunction) => {
    const { status, message } = err as HttpException;
    res.status(status || 500).json({ message });
    next();
  },
};
