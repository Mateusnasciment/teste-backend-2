const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/infra/web/routes.ts']

const doc = {
  info: {
      version: "1.0.0",
      title: "API de Gestão de funcionários",
      description: "Documentation of Employees API."
  },
  host: "localhost:3333",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
      {
          "name": "Employees",
          "description": "Employees of endpoints"
      }
  ],
  definitions: {
      Employees: {
          name: "John Doe",
      },
      FindEmployee: {
          $name: "John Doe",
      }
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc)

// Documentação: https://github.com/davibaltar/swagger-autogen