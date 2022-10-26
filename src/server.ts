import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import EnvVars from '@configurations/EnvVars';
import router from './routes/router';


// **** Init express **** //

const app = express();

// **** Set basic express settings **** //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.cookieProps.secret));

app.use(cors());

// Show routes called in console during development
if (EnvVars.nodeEnv === 'dev') {
    app.use(morgan('dev'));
}

// Security
if (EnvVars.nodeEnv === 'production') {
    app.use(helmet());
}

console.log('start api');
// Add APIs
app.use('/api', router);
console.log('end api');

export default app;
