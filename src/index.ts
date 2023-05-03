import * as express from "express"
import * as bodyParser from "body-parser"
import { createConnection } from "typeorm"
import routes from "./routes"
import { errorHandlerTool } from "./controller/error_archives/errorFunction"


export const app = express()
const porta = 3001

createConnection()

app.use(bodyParser.json())
app.use(routes)
app.use(errorHandlerTool)

app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta \x1b[32m${porta}\x1b[0m`);
  });