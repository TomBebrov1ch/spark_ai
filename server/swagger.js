const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API Documentation",
  },
  host: "https://sparkai-production-dbad.up.railway.app/",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./api/routes/*.ts"]; // array of your route files

swaggerAutogen(outputFile, endpointsFiles, doc);
