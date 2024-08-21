const userServices = require('../services/user.services');
const { generateToken } = require('../utils/jwt');
const { StatusCodes } = require('http-status-codes');

module.exports = {
	createUser: async (req, res) => {
		const { name, family_name, email, picture } = req.body;

		try {
			const userExist = await userServices.getUserByEmailId(email);

			if (userExist) {
				const token = generateToken(userExist.toJSON());
				return res.status(StatusCodes.OK).send({
					message: 'User logged in successfully',
					data: { authToken: token },
				});
			}
			const userObj = await userServices.createUser({
				name,
				family_name,
				email,
				picture,
			});
			const userJson = userObj.toJSON();
			const user = {
				id: userJson.id,
				name: userJson.name,
				family_name: userJson.family_name,
				email: userJson.email,
				picture: userJson.picture,
			};
			const token = generateToken(user);
			return res.status(StatusCodes.OK).send({
				message: 'User created successfully',
				data: { userData: user, authToken: token },
			});
		} catch (error) {
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: error.message,
				data: {},
			});
		}
	},
	updateUser: async (req, res) => {
		try {
			const { name, family_name, email, picture } = req.body;
			const reqObj = { name, family_name, email, picture };
			const user = await userServices.updateUser(req.user.email, reqObj);
			return res
				.status(StatusCodes.OK)
				.send({ message: 'User updated Successfully', data: user });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.send({ message: error.message, data: {} });
		}
	},
	deleteUser: async (req, res) => {
		try {
			const email = req.params.userEmail;
			const user = await userServices.deleteUser(email);
			return res
				.status(StatusCodes.OK)
				.send({ message: 'User deleted successfully', data: {} });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.send({ message: error.message, data: {} });
		}
	},
};
