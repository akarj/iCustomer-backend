const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const authMiddleware = async (req, res, next) => {
   const token = req.headers['authorization'];

   if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Authorization header is missing' });
   }

   const bearerToken = token.split(' ')[1];

   try {
      jwt.verify(bearerToken, process.env.JWT_SECRET, (err, user) => {
         if (err) return res.status(StatusCodes.FORBIDDEN).send({ message: 'Invalid token.' });

         req.user = user;
         next();
      });
   } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid or expired token' });
   }
};

module.exports = {
   authMiddleware
};