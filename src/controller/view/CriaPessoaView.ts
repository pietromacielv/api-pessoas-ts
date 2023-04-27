import { Response, Request } from "express";
import { CriaPessoa } from "../CriaPessoa";

export class CriaPessoaView {
    async criarPessoa(req: Request, res: Response) {
        const createPessoa = new CriaPessoa();
        const pessoaCriada = await createPessoa.criaPessoa( req.body.nome, req.body.sobrenome, req.body.idade, req.body.peso)
        if (req.body.nome.lenght == 0 || req.body.sobrenome.lenght == 0 || req.body.idade.lenght == 0 || req.body.peso.lenght == 0) {
            res.status(400).json({message: ' Campo faltando. Favor revisar todos os campos. (nome, sobrenome, idade, peso) '}) // o .status foi usado para alterar o http status para diferente de 200, que é o padrão
        }
        res.json({message: ' Pessoa criada com sucesso. ', pessoaCriada}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
