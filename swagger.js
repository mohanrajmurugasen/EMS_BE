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
  apis: [
    "./Routes/Assessment.js",
    "./Routes/CallDetails.js",
    "./Routes/Treatment.js",
    "./Routes/Users.js",
    "./Schemas/Assessment.yaml",
    "./Schemas/CallDetails.yaml",
    "./Schemas/Treatment.yaml",
    "./Schemas/Users.yaml",
  ],
  // apis: [
  //   "./Routes/*.js", "./Routes/*.yaml",
  // ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
