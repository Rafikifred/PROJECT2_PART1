const swaggerJSDoc = {
  openapi: '3.0.0',
  info: {
    title: 'W03 Project API',
    version: '1.0.0',
    description: 'API documentation for Students, Teachers, and Auth'
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
  security: [
    { bearerAuth: [] } // Apply globally; can be overridden per route
  ],
  paths: {
    // --- Auth Routes ---
    '/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['username', 'email', 'password']
              }
            }
          }
        },
        responses: {
          201: { description: 'User registered' },
          400: { description: 'Validation or duplicate error' }
        }
      }
    },
    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login user and receive JWT token',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['email', 'password']
              }
            }
          }
        },
        responses: {
          200: { description: 'Logged in with token' },
          400: { description: 'Invalid credentials' }
        }
      }
    },

    // --- Students Routes ---
    '/students': {
      get: {
        summary: 'Get all students',
        responses: { 200: { description: 'List of students' } }
      },
      post: {
        summary: 'Create a new student',
        security: [{ bearerAuth: [] }], // require JWT
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
                  address: { type: 'string' }
                },
                required: ['firstName', 'lastName', 'email', 'age', 'grade', 'phone', 'address']
              }
            }
          }
        },
        responses: { 201: { description: 'Student created' } }
      }
    },
    '/students/{id}': {
      get: {
        summary: 'Get a student by ID',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Student found' } }
      },
      put: {
        summary: 'Update a student by ID',
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
                  address: { type: 'string' }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Student updated' } }
      },
      delete: {
        summary: 'Delete a student by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Student deleted' } }
      }
    },

    // --- Teachers Routes ---
    '/teachers': {
      get: { summary: 'Get all teachers', responses: { 200: { description: 'List of teachers' } } },
      post: {
        summary: 'Create a new teacher',
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
        responses: { 201: { description: 'Teacher created' } }
      }
    },
    '/teachers/{id}': {
      get: {
        summary: 'Get a teacher by ID',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Teacher found' } }
      },
      put: {
        summary: 'Update a teacher by ID',
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
        responses: { 200: { description: 'Teacher updated' } }
      },
      delete: {
        summary: 'Delete a teacher by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Teacher deleted' } }
      }
    }
  }
};

module.exports = swaggerJSDoc;
