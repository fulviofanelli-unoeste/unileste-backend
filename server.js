import express from 'express'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';
      
const app = express();

//configura as ferramentas de parser
app.use(cookieParser());
app.use(express.json());

//página de documentação
app.use('/docs', swaggerUi.serve, swaggerUi.setup(outputJson));

app.listen(5000, function() {
    console.log("backend em execução");
})
