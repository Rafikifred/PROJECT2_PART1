const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerSpec'); // updated swaggerSpec.js with protected routes

module.exports = (app) => {
  // Serve Swagger UI at /api-docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
};
