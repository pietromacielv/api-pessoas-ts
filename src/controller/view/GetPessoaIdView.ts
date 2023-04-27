import { Response, Request } from "express";
import { GetPessoaId } from "../GetPessoaId";

export class GetPessoaIdView {
    async listarPessoaId(req: Request, res: Response) {
        const pessoa = new GetPessoaId();
        const pessoaGet = await pessoa.getPessoaId(Number(req.params.id))
        if ( pessoaGet == undefined) {
            res.status(404).json({message: ' Erro ao listar pessoa. '})
        }
        res.json({message: pessoaGet}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
