import express from 'express';
import 'express-async-errors';
import Routes from './routes/index';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(Routes);

app.use(errorHandler.error);

export default app;
