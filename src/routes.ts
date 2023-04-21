import { Router, Request, Response } from 'express'
import { getPessoa, criaPessoa, getPessoaId, atualizaPessoa, deletaPessoa } from './controller/PessoaController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

routes.get('/pessoa', getPessoa)
routes.get('/pessoa/:id', getPessoaId)
routes.post('/pessoa', criaPessoa)
routes.put('/pessoa/:id', atualizaPessoa)
routes.delete('/pessoa/:id', deletaPessoa)

export default routes
