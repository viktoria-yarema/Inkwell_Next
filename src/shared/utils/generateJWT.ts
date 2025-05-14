import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const SERVER_SECRET = process.env.JWT_SECRET;
const AUTHOR_ID = process.env.AUTHOR_ID;

export const generateToken = (): string => {
  const options: SignOptions = { expiresIn: Number(JWT_EXPIRES_IN) };
  return jwt.sign({ id: AUTHOR_ID }, SERVER_SECRET as Secret, options);
};
