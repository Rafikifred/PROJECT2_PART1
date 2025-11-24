const swaggerJSDoc = {
  openapi: '3.0.0',
  info: {
    title: 'W04 Project API',
    version: '1.0.0',
    description: 'API documentation for Students and Teachers collections with Authentication'
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Local server' }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [],
  paths: {
    '/students': {
      get: {
        summary: 'Get all students',
        tags: ['Students'],
        responses: { 200: { description: 'List of students' } }
      },
      post: {
        summary: 'Create a new student (protected)',
        tags: ['Students'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  age: { type: 'integer' },
                  grade: { type: 'string' },
                  phone: { type: 'string' },
                  address: { type: 'string' },
                  gender: { type: 'string' }
                },
                required: ['firstName', 'lastName', 'email', 'age', 'grade', 'phone', 'address', 'gender']
              }
            }
          }
        },
        responses: { 201: { description: 'Student created' }, 401: { description: 'Unauthorized' } }
      }
    },
    '/students/{id}': {
      get: {
        summary: 'Get a student by ID',
        tags: ['Students'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Student found' }, 404: { description: 'Not found' } }
      },
      put: {
        summary: 'Update a student by ID (protected)',
        tags: ['Students'],
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  age: { type: 'integer' },
                  grade: { type: 'string' },
                  phone: { type: 'string' },
                  address: { type: 'string' },
                  gender: { type: 'string' }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Student updated' }, 401: { description: 'Unauthorized' } }
      },
      delete: {
        summary: 'Delete a student by ID (protected)',
        tags: ['Students'],
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Student deleted' }, 401: { description: 'Unauthorized' } }
      }
    },

    '/teachers': {
      get: {
        summary: 'Get all teachers',
        tags: ['Teachers'],
        responses: { 200: { description: 'List of teachers' } }
      },
      post: {
        summary: 'Create a new teacher (protected)',
        tags: ['Teachers'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  subject: { type: 'string' },
                  phone: { type: 'string' },
                  address: { type: 'string' },
                  experience: { type: 'integer' }
                },
                required: ['firstName', 'lastName', 'email', 'subject', 'phone', 'address', 'experience']
              }
            }
          }
        },
        responses: { 201: { description: 'Teacher created' }, 401: { description: 'Unauthorized' } }
      }
    },
    '/teachers/{id}': {
      get: {
        summary: 'Get a teacher by ID',
        tags: ['Teachers'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Teacher found' }, 404: { description: 'Not found' } }
      },
      put: {
        summary: 'Update a teacher by ID (protected)',
        tags: ['Teachers'],
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  subject: { type: 'string' },
                  phone: { type: 'string' },
                  address: { type: 'string' },
                  experience: { type: 'integer' }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Teacher updated' }, 401: { description: 'Unauthorized' } }
      },
      delete: {
        summary: 'Delete a teacher by ID (protected)',
        tags: ['Teachers'],
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Teacher deleted' }, 401: { description: 'Unauthorized' } }
      }
    }
  }
};

module.exports = swaggerJSDoc;
