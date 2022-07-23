const routeInvestmentsBuy = {
  summary: 'Buy an asset',
  description: 'Method used in this route to buy an asset',
  tags: ['Investments'],
  operationId: 'buyAsset',
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
        },
      },
    },
  },
};

export default routeInvestmentsBuy;
