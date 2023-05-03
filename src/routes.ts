import { Router, Request, Response } from 'express'
import { GetPersonIdView } from './controller/view/GetPersonIdView'
import { PostPersonView } from './controller/view/PostPersonView'
import { PutPersonView } from './controller/view/PutPersonView'
import { GetPersonView } from './controller/view/GetPersonView'
import { DeletePersonView } from './controller/view/DeletePersonView'
import { error } from 'console'

const routes = Router()

routes.get('/', (res: Response) => {
    return res.send(`
        Home
    `)
})

routes.get('/person', (req, res) => new GetPersonView().personGet(req, res))
routes.get('/person/:id', (req, res, next) => new GetPersonIdView().personGetById(req, res, next))
routes.post('/person', (req, res, next) => new PostPersonView().personCreate(req, res, next))
routes.put('/person/:id', (req, res, next) => new PutPersonView().personUpdate(req, res))
routes.delete('/person/:id', (req, res, next) => new DeletePersonView().personDelete(req, res, next));


export default routes


