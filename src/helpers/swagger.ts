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
                $ref: '#/components/schemas/BodyAssetToTrade',
              },
              examples: {
                Product: {
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
                  $ref: '#/components/schemas/ResponseOfAssetPurchased',
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
                $ref: '#/components/schemas/BodyAssetToTrade',
              },
              examples: {
                Product: {
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
                  $ref: '#/components/schemas/ResponseOfAssetSold',
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
  },
};

export default swaggerDocument;
