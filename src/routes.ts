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

routes.get('/pessoa', GetPessoa.getPessoa9)
routes.get('/pessoa/:id', new GetPessoaId)
routes.post('/pessoa', new CriaPessoa)
routes.put('/pessoa/:id', new AtualizaPessoa)
routes.delete('/pessoa/:id', new DeletaPessoa)

export default routes
