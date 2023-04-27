import { Response, Request } from "express";
import { DeletaPessoa } from "../DeletaPessoa";

export class DeletaPessoaView {
    async deletePessoa(req: Request, res: Response) {
        const pessoa = new DeletaPessoa();
        const pessoaDelete = await pessoa.deletaPessoa(Number(req.params.id))
        if (pessoaDelete.affected == 0) {
            res.json({message: ' Erro ao deletar pessoa. '})
        }
        res.json({message: ' Pessoa deletada com sucesso. '}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
