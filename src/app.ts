import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerTs from './documentation/swagger';
import Routes from './routes/index';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(Routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerTs));

app.use(errorHandler);

export default app;
