import { Response, Request } from "express";
import { GetPessoa } from "../GetPessoa";

export class GetPessoaView {
    async listarPessoa(req: Request, res: Response) {
        const pessoa = new GetPessoa();
        const pessoaGet = await pessoa.getPessoa()
        res.json({message: pessoaGet}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}