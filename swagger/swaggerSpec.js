const swaggerJSDoc = {
  openapi: '3.0.0',
  info: {
    title: 'W03 Project API',
    version: '1.0.0',
    description: 'API documentation for Students and Teachers collections'
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Local server' }
  ],
  paths: {
    '/students': {
      get: {
        summary: 'Get all students',
        responses: {
          200: { description: 'List of students' }
        }
      },
      post: {
        summary: 'Create a new student',
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
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } }
        ],
        responses: { 200: { description: 'Student found' } }
      },
      put: {
        summary: 'Update a student by ID',
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } }
        ],
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
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } }
        ],
        responses: { 200: { description: 'Student deleted' } }
      }
    },
    '/teachers': {
      get: {
        summary: 'Get all teachers',
        responses: { 200: { description: 'List of teachers' } }
      },
      post: {
        summary: 'Create a new teacher',
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
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } }
        ],
        responses: { 200: { description: 'Teacher found' } }
      },
      put: {
        summary: 'Update a teacher by ID',
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } }
        ],
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
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } }
        ],
        responses: { 200: { description: 'Teacher deleted' } }
      }
    }
  }
};

module.exports = swaggerJSDoc;
