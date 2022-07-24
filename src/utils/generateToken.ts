import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = 'super secret key =)';

const config: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export interface IPayloadJWT {
  email: string;
  name: string;
}

const generateToken = (payload: IPayloadJWT) => {
  const signedToken = jwt.sign(payload, JWT_SECRET, config);
  return signedToken;
};

export { 
  generateToken
};