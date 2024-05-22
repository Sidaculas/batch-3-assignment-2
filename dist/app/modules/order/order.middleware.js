"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        throw new Error('Validation error');
    }
};
exports.default = validation;
