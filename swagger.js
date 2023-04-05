const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EMS Project',
      version: '1.0.0',
      description: 'EMS API documentation',
    },
  },
  apis: ['./Routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
