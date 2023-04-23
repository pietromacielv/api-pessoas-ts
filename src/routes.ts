import { Router, Request, Response } from 'express'
import { GetPessoa } from './controller/GetPessoa'
import { GetPessoaId } from './controller/GetPessoaId'
import { CriaPessoa } from './controller/CriaPessoa'
import { AtualizaPessoa } from './controller/AtualizaPessoa'
import { DeletaPessoa } from './controller/DeletaPessoa'
const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

routes.get('/pessoa', (req, res) => new GetPessoa().getPessoa(req, res))
routes.get('/pessoa/:id', (req, res) => new GetPessoaId().getPessoaId(req, res))
routes.post('/pessoa', (req, res) => new CriaPessoa().criaPessoa(req, res))
routes.put('/pessoa/:id', (req, res) => new AtualizaPessoa().atualizaPessoa(req, res))
routes.delete('/pessoa/:id', (req, res) => new DeletaPessoa().deletaPessoa(req, res))

export default routes
