require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const userRoute = require('./src/routes/user.routes');
const productsRoute = require('./src/routes/products.routes');
const { handleError } = require('./src/utils/errorHandler');
const connectDB = require('./src/config/mongoDb');
const app = express();
const cors = require('cors');
connectDB();
app.use(express.urlencoded({ extended: false }));

// Middleware

const corsOptions = {
	origin: process.env.FRONTEND_URL,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(helmet());
app.use(express.json());

// Routes
app.use('/v1/user', userRoute);
app.use('/v1/products', productsRoute);
app.get('/', (_, res) => {
	return res.status(200).send({ message: 'Hello World', data: {} });
});
app.use(handleError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
