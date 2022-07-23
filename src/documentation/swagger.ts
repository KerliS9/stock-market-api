import routeLogin from './routesLogin.ts/login.swagger';
import assets from './routesAssets/assets.swagger';
import assetsById from './routesAssets/assetsById.swagger';
import investmentsBuy from './routesInvestments/investmentsBuy.swagger';
import investmentsSell from './routesInvestments/investmentsSell.swagger';
import accountById from './routesAccount/accountById.swagger';
import accountStatementByCustomerId from './routesAccount/accountStatementByCustomerId.swagger';
import accountAssetsByCustomerId from './routesAccount/accountAssetsByCustomerId.swagger';
import accountInput from './routesAccount/accountInput.swagger';
import accountOutput from './routesAccount/accountOutput.swagger';

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
    '/investments/buy': {
      post: investmentsBuy,
    },
    '/investments/sell': {
      post: investmentsSell,
    },
    '/account/{id}': {
      get: accountById,
    },
    '/account/statement/{id}': {
      get: accountStatementByCustomerId,
    },
    '/account/assets/{id}': {
      get: accountAssetsByCustomerId,
    },
    '/account/input': {
      post: accountInput,
    },
    '/account/output': {
      post: accountOutput,
    },
  },
};

export default swaggerDocument;
