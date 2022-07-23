const routeAccountById = {
  summary: 'Get a customer by id',
  description: 'Method used in this route to get data from one costumer',
  tags: ['Account'],
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            items: {
              customerId: {
                type: 'integer',
              },
              fullName: {
                type: 'string',
              },
              investorProfile: {
                type: 'string',
              },
              accountBalance: {
                type: 'decimal',
              },
            },
          },
        },
      },
    },
  },
};

export default routeAccountById;
