const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const { authMiddleware } = require("../middleware/auth/auth.middleware");
const { validateUserFields } = require('../middleware/users/user.middleware');

userRouter.put('/', authMiddleware, userController.updateUser);
userRouter.delete('/', authMiddleware, userController.deleteUser);
userRouter.post('/', validateUserFields, userController.createUser);
userRouter.get('/', (_, res) => {
    return res.status(200).send({ message: 'Hello User', data: {} });
});

module.exports = userRouter;


