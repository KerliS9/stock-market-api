const routeAccountInput = {
  summary: 'Deposit at account',
  description: 'Method used in this route to deposit at account customer',
  tags: ['Account'],
  operationId: 'insertDepositAtAccountByCustomerId',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          items: {
            customerId: {
              type: 'integer',
            },
            inputValue: {
              type: 'decimal',
            },
          },
        },
        examples: {
          Deposit: {
            summary: 'Deposit at account',
            value: {
              customerId: 1,
              inputValue: 100.00,
            },
          },
        },
      },
    },
  },
  responses: {
    409: {
      description: 'Sorry, value to deposit into account need to be greater than 0',
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
              inputValue: {
                type: 'decimal',
              },
            },
          },
        },
      },
    },
  },
};

export default routeAccountInput;
