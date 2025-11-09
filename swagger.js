const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'COntacts API',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate 
swaggerAutogen(outputFile, endpointsFiles, doc);
