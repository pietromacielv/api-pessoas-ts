import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'

/*export const getPessoa = async (req: Request, res: Response) => {
    try {
        const pessoa = await getRepository(Pessoa).find()
    return res.json(pessoa);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: ' Erro ao listar pessoas. '})
    }
};*/

export class GetPessoa {
    async getPessoa(req: Request, res: Response):Promise<any> {
        try {
            const pessoa = await getRepository(Pessoa).find()
        return res.json(pessoa);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: ' Erro ao listar pessoas. '})
        }
    }
}