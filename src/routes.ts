import { Router, Request, Response } from 'express'
import { GetPersonIdView } from './controller/view/GetPersonIdView'
import { PostPersonView } from './controller/view/PostPersonView'
import { PutPersonView } from './controller/view/PutPersonView'
import { GetPersonView } from './controller/view/GetPersonView'
import { DeletePersonView } from './controller/view/DeletePersonView'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Person List API</title>
          </head>
          <body>
            <h1>Welcome to the Person List API</h1>
            <p>This API allows you to view a list of people and access individual person information.</p>
            <button onclick="window.location.href='/person'">View Person List</button>
            <button onclick="showInput()">View Person by ID</button>
            <div id="inputContainer" style="display:none">
              <input type="text" id="personIdInput" placeholder="Enter person ID" />
              <button onclick="submitPersonId()">Send</button>
            </div>
            <script>
              function showInput() {
                document.getElementById("inputContainer").style.display = "block";
              }
              function submitPersonId() {
                const id = document.getElementById("personIdInput").value;
                if (id) {
                  window.location.href = '/person/' + id;
                }
              }
            </script>
          </body>
        </html>
    `)
})

routes.get('/person', (req, res) => new GetPersonView().personGet(req, res))
routes.get('/person/:id', (req, res) => new GetPersonIdView().personGetById(req, res))
routes.post('/person', (req, res) => new PostPersonView().personCreate(req, res))
routes.put('/person/:id', (req, res) => new PutPersonView().personUpdate(req, res))
routes.delete('/person/:id', (req, res) => new DeletePersonView().personDelete(req, res))

export default routes
