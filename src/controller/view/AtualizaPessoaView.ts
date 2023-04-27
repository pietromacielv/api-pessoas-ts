import { Response, Request } from "express";
import { AtualizaPessoa } from "../AtualizaPessoa";
import { GetPessoaId } from "../GetPessoaId";

export class AtualizaPessoaView {
    async atualizarPessoa(req: Request, res: Response) {
        const atualizarNovaPessoa = new AtualizaPessoa();
        const pessoaAtualizada = await atualizarNovaPessoa.atualizaPessoa(Number(req.params.id), req.body.nome, req.body.sobrenome, req.body.idade, req.body.peso)
        if (pessoaAtualizada.affected == 0 ) {
            res.json({message: ' Não foi possível encontrar a pessoa.  '})
        }


        const exibirPessoaAtualizada = new GetPessoaId();
        const registro = await exibirPessoaAtualizada.getPessoaId(Number(req.params.id))
        res.json({message: ' Pessoa atualizada com sucesso. ', registro}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}

