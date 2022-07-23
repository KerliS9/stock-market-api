const routeAccountStatementById = {
  summary: 'Get an account statement',
  description: 'Method used in this route to get an account statement by customer id',
  tags: ['Account'],
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
            type: 'array',
            items: {
              date: {
                type: 'date',
              },
              accountInput: {
                type: 'decimal',
              },
              accountOutput: {
                type: 'decimal',
              },
            },
          },
        },
      },
    },
  },
};

export default routeAccountStatementById;
