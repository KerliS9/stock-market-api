const routeLogin = {
  summary: 'Authenticate login',
  description: 'Method used in this route to verify if customer is allowed to access platform',
  tags: ['Login'],
  operationId: 'getCustomerLogin',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          items: {
            BodyLogin: {
              type: 'object',
              properties: {
                fullName: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
            },
          },
        },
        examples: {
          Login: {
            summary: 'Customer data',
            value: {
              fullName: 'Kerli Schroeder',
              password: '214563',
            },
          },
        },
      },
    },
  },
  responses: {
    401: {
      description: 'Token not found',
    },
    404: {
      description: 'Full name and/or password is invalid',
    },
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            items: {
              token: 'string',
            },
          },
        },
      },
    },
  },
};

export default routeLogin;
