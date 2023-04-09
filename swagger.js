const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EMS Web API",
      version: "1.0.0",
      description: "EMS API documentation",
    },
  },
  apis: ["./Routes/*.js", "./Schemas/*.yaml"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
