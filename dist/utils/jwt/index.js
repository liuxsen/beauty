"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JWT = require('jsonwebtoken');
const JWTCONFIG = require('../../config/jwt-config');
exports.sign = (data) => {
    return JWT.sign(data, JWTCONFIG.secret, {
        expiresIn: JWTCONFIG.expiresIn
    });
};
exports.decoded = (token) => {
    try {
        return JWT.verify(token, JWTCONFIG.secret);
    }
    catch (err) {
        return null;
    }
};
//# sourceMappingURL=index.js.map