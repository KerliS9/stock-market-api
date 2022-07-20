import { SignOptions, sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const signInOptions: SignOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const SECRET = process.env.SECRET || 'JwtConfig';

export const generateJWTToken = (payload: object) => sign(payload, SECRET, signInOptions);

export const verifyJWTToken = (token: string) => verify(token, SECRET, signInOptions);
