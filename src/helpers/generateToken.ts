import { SignOptions, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const signInOptions: SignOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const SECRET = process.env.SECRET || 'JwtConfig';

const generateJWTToken = (payload: object) => sign(payload, SECRET, signInOptions);

export default generateJWTToken;
