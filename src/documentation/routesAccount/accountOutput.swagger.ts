const routeAccountOutput = {
  summary: 'Withdraw from account',
  description: 'Method used in this route to withdraw a value',
  tags: ['Account'],
  operationId: 'insertWithdrawAtAccountByCustomerId',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          items: {
            customerId: {
              type: 'integer',
            },
            outputValue: {
              type: 'decimal',
            },
          },
        },
        examples: {
          Withdraw: {
            summary: 'Withdraw from account',
            value: {
              customerId: 1,
              outputValue: 100.10,
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
              customerId: {
                type: 'integer',
              },
              outputValue: {
                type: 'decimal',
              },
            },
          },
        },
      },
    },
  },
};

export default routeAccountOutput;
