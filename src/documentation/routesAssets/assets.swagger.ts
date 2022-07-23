const routeAssets = {
  summary: 'Get all assets',
  description: 'Method used in this route to get all assets',
  tags: ['Assets'],
  operationId: 'getAllAssets',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              id: {
                type: 'integer',
              },
              asset: {
                type: 'string',
              },
              price: {
                type: 'decimal',
              },
              sector: {
                type: 'string',
              },
              company: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
};

export default routeAssets;
