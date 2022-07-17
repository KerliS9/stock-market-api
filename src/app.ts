import express from 'express';
import Routes from './routes/index';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(Routes);

export default app;
