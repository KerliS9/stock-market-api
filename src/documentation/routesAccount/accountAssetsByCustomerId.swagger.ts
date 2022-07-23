const routeAccountAssetsById = {
  summary: 'Get assets by costumer',
  description: 'Method used in this route to get all the assets that belong to a customer',
  tags: ['Account'],
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
            type: 'array',
            items: {
              customerId: {
                type: 'integer',
              },
              assetId: {
                type: 'integer',
              },
              asset: {
                type: 'string',
              },
              amountAsset: {
                type: 'integer',
              },
              unitValue: {
                type: 'decimal',
              },
              totalInvestments: {
                type: 'integer',
              },
              sector: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
};

export default routeAccountAssetsById;
