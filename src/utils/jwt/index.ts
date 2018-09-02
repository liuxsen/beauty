const JWT = require('jsonwebtoken');
const JWTCONFIG = require('../../config/jwt-config');

export const sign = (data: any) => {
  return JWT.sign(data, JWTCONFIG.secret, {
    expiresIn: JWTCONFIG.expiresIn
  });
};

export const decoded = (token: string) => {
  try {
    return JWT.verify(token, JWTCONFIG.secret);
  } catch (err) {
    return null;
  }
};
