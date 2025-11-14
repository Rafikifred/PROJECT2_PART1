const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerSpec'); // points to swaggerSpec.js

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
