import { Router, Request, Response } from 'express'
import { GetPersonIdView } from './controller/view/GetPersonIdView'
import { PostPersonView } from './controller/view/PostPersonView'
import { PutPersonView } from './controller/view/PutPersonView'
import { GetPersonView } from './controller/view/GetPersonView'
import { DeletePersonView } from './controller/view/DeletePersonView'
import { PutPerson } from './controller/PutPerson'
const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

routes.get('/person', (req, res) => new GetPersonView().personGet(req, res))
routes.get('/person/:id', (req, res) => new GetPersonIdView().personGetById(req, res))
routes.post('/person', (req, res) => new PostPersonView().personCreate(req, res))
routes.put('/person/:id', (req, res) => new PutPersonView().personUpdate(req, res))
routes.delete('/person/:id', (req, res) => new DeletePersonView().personDelete(req, res))

export default routes
