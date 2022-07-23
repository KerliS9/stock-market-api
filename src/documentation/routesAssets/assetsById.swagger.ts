const routeAssetsById = {
  summary: 'Get asset by id',
  description: 'Method used in this route to get a specific a asset',
  tags: ['Assets'],
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
            items: {
              assetId: {
                type: 'integer',
              },
              asset: {
                type: 'string',
              },
              price: {
                type: 'decimal',
              },
              broker: {
                type: 'string',
              },
              amountAsset: {
                type: 'integer',
              },
            },
          },
        },
      },
      404: {
        description: 'Asset not found',
      },
    },
  },
};

export default routeAssetsById;
