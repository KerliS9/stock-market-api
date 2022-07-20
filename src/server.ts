import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Server is UP on port ${PORT}`));

export default server;
