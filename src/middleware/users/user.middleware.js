const userSchema = require('../../validation/user.validationSchema');
const { StatusCodes } = require('http-status-codes');

const validateUserFields = (req, res, next) => {
    try {
        userSchema.parse(req.body);
        next();
    } catch (error) {
        if (error.errors) {
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: error.errors });
        }
        next(error);
    }
};

module.exports = { validateUserFields };
