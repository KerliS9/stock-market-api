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
      post: {
        summary: 'Authenticate login',
        description: 'Method used in this route to verify if customer is allowed to access platform',
        tags: ['login'],
        operationId: 'getCustomerLogin',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                items: {
                  $ref: '#/components/schemas/BodyLogin',
                },
              },
              examples: {
                Login: {
                  summary: 'Customer data',
                  value: {
                    fullName: 'Kerli Schroeder',
                    password: '214563',
                  },
                },
              },
            },
          },
        },
        responses: {
          401: {
            description: 'Token not found',
          },
          404: {
            description: 'Full name and/or password is invalid',
          },
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
          },
        },
      },
    },
    '/assets': {
      get: {
        summary: 'Get all assets',
        description: 'Method used in this route to get all assets',
        tags: ['assets'],
        operationId: 'getAllAssets',
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array of objects',
                },
              },
            },
          },
        },
      },
    },
    '/assets/{id}': {
      get: {
        summary: 'Get asset by id',
        description: 'Method used in this route to get a specific a asset',
        tags: ['assets'],
        operationId: 'getAssetById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id of the asset',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
            404: {
              description: 'Asset not found',
            },
          },
        },
      },
    },
    '/investments/buy': {
      post: {
        summary: 'Buy an asset',
        description: 'Method used in this route to buy an asset',
        tags: ['investments'],
        operationId: 'buyAsset',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                items: {
                  $ref: '#/components/schemas/BodyAssetToTrade',
                },
              },
              examples: {
                Asset: {
                  summary: 'Asset to buy',
                  value: {
                    customerId: 1,
                    assetId: 1,
                    quantity: 100,
                  },
                },
              },
            },
          },
        },
        responses: {
          409: {
            description: 'Sorry, this operation is not available to your investor profile',
          },
          400: {
            description: 'customerId, assetId and is required',
          },
          422: {
            description: 'Value at keys customerId, assetId and is required must be a number greater than 0',
          },
          201: {
            description: 'Created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  items: {
                    $ref: '#/components/schemas/ResponseOfAssetPurchased',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/investments/sell': {
      post: {
        summary: 'Sell an asset',
        description: 'Method used in this route to sell an asset',
        tags: ['investments'],
        operationId: 'sellAsset',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                items: {
                  $ref: '#/components/schemas/BodyAssetToTrade',
                },
              },
              examples: {
                Asset: {
                  summary: 'Asset to sell',
                  value: {
                    customerId: 1,
                    assetId: 1,
                    quantity: 100,
                  },
                },
              },
            },
          },
        },
        responses: {
          409: {
            description: 'Sorry, you do not have this amount of this asset to sell',
          },
          400: {
            description: 'customerId, assetId and is required',
          },
          422: {
            description: 'Value at keys customerId, assetId and is required must be a number greater than 0',
          },
          201: {
            description: 'Created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  items: {
                    $ref: '#/components/schemas/ResponseOfAssetSold',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/account': {
      get: {
        summary: 'Get all customers',
        description: 'Method used in this route to get all customers registered on database',
        tags: ['account'],
        operationId: 'getAllCustomers',
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array of objects',
                },
              },
            },
          },
        },
      },
    },
    '/account/{id}': {
      get: {
        summary: 'Get a costumer',
        description: 'Method used in this route to get an customer',
        tags: ['account'],
        operationId: 'getCustomerById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'customer id',
            required: true,
          },
        ],
        responses: {
          404: {
            description: 'Sorry, this customer still doesn\t have an account with us',
          },
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
          },
        },
      },
    },
    '/account/statement/{id}': {
      get: {
        summary: 'Get an account statement by costumer',
        description: 'Method used in this route to get an account statement',
        tags: ['account'],
        operationId: 'getAccountStatementByCustomerId',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'customer id',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array of objects',
                },
              },
            },
          },
        },
      },
    },
    '/account/assets/{id}': {
      get: {
        summary: 'Get assets by costumer',
        description: 'Method used in this route to get all the assets that belong to a customer',
        tags: ['account'],
        operationId: 'getAssetByCustomerId',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'customer id',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array of objects',
                },
              },
            },
          },
        },
      },
    },
    '/account/input': {
      post: {
        summary: 'Deposit at account',
        description: 'Method used in this route to deposit at account customer',
        tags: ['account'],
        operationId: 'insertDepositAtAccountByCustomerId',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                items: {
                  $ref: '#/components/schemas/BodyDeposit',
                },
              },
              examples: {
                Deposit: {
                  summary: 'Deposit at account',
                  value: {
                    customerId: 1,
                    inputValue: 100,
                  },
                },
              },
            },
          },
        },
        responses: {
          409: {
            description: 'Sorry, value to pay into an account need to be greater than 0',
          },
          201: {
            description: 'Created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  items: {
                    $ref: '#/components/schemas/BodyDeposit',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/account/output': {
      post: {
        summary: 'Withdraw from account',
        description: 'Method used in this route to withdraw a value',
        tags: ['account'],
        operationId: 'insertWithdrawAtAccountByCustomerId',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BodyWithdraw',
              },
              examples: {
                Withdraw: {
                  summary: 'Withdraw from account',
                  value: {
                    customerId: 1,
                    outputValue: 100,
                  },
                },
              },
            },
          },
        },
        responses: {
          409: {
            description: 'Sorry, value to withdraw from account need to be greater than 0',
          },
          201: {
            description: 'Created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  items: {
                    $ref: '#/components/schemas/BodyWithdraw',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schema: {
      BodyLogin: {
        type: 'object',
        properties: {
          fullName: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
      },
      BodyAssetToTrade: {
        type: 'object',
        properties: {
          customerId: {
            type: 'integer',
          },
          assetId: {
            type: 'integer',
          },
          quantity: {
            type: 'integer',
          },
        },
      },
      ResponseOfAssetPurchased: {
        type: 'object',
        properties: {
          customerId: {
            type: 'integer',
          },
          assetId: {
            type: 'integer',
          },
          quantity: {
            type: 'integer',
          },
          totalPurchased: {
            type: 'integer',
          },
        },
      },
      ResponseOfAssetSold: {
        type: 'object',
        properties: {
          customerId: {
            type: 'integer',
          },
          assetId: {
            type: 'integer',
          },
          quantity: {
            type: 'integer',
          },
          totalSale: {
            type: 'integer',
          },
        },
      },
    },
    BodyDeposit: {
      type: 'object',
      properties: {
        customerId: {
          type: 'integer',
        },
        inputValue: {
          type: 'integer',
        },
      },
    },
    BodyWithdraw: {
      type: 'object',
      properties: {
        customerId: {
          type: 'integer',
        },
        outputValue: {
          type: 'integer',
        },
      },
    },
  },
};

export default swaggerDocument;
