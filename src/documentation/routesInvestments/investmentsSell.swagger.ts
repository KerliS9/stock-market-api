const routeInvestmentsSell = {
  summary: 'Sell an asset',
  description: 'Method used in this route to sell an asset',
  tags: ['Investments'],
  operationId: 'sellAsset',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          items: {
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
    },
  },
};

export default routeInvestmentsSell;
