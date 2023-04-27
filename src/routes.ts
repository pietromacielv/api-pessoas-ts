import { Router, Request, Response } from 'express'
import { GetPessoaIdView } from './controller/view/GetPessoaIdView'
import { CriaPessoaView } from './controller/view/CriaPessoaView'
import { AtualizaPessoaView } from './controller/view/AtualizaPessoaView'
import { GetPessoaView } from './controller/view/GetPessoaView'
import { DeletaPessoaView } from './controller/view/DeletaPessoaView'
const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

routes.get('/pessoa', (req, res) => new GetPessoaView().listarPessoa(req, res))
routes.get('/pessoa/:id', (req, res) => new GetPessoaIdView().listarPessoaId(req, res))
routes.post('/pessoa', (req, res) => new CriaPessoaView().criarPessoa(req, res))
routes.put('/pessoa/:id', (req, res) => new AtualizaPessoaView().atualizarPessoa(req, res))
routes.delete('/pessoa/:id', (req, res) => new DeletaPessoaView().deletePessoa(req, res))

export default routes
