import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "API - Unileste",
        description: "API utilizada para o serviços digitais da universidade"
    },
    host: 'localhost:5000'
}

const outputJson = "./swagger-output.json";
const routes = []

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js');
})