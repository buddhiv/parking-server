import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import router from './routes/router';


// **** Init express **** //

const app = express();

// **** Set basic express settings **** //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan('dev'));

app.use(helmet());

// Add APIs
app.use('/api', router);

export default app;
