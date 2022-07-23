import routeLogin from './login.swagger';
import assets from './assets.swagger';
import assetsById from './assetsById.swagger';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Stock Market API',
    description: 'API simulação de algumas atividades que são possíveis de serem realizadas na conta de uma correta',
    contact: {
      email: 'kerlischroeder9@gmail.com',
      linkedIn: 'kerlischroeder',
    },
    version: '1.0.0',
  },
  path: {
    '/login': {
      post: routeLogin,
    },
    '/assets': {
      get: assets,
    },
    '/assets/{id}': {
      get: assetsById,
    },
  },
};

export default swaggerDocument;
