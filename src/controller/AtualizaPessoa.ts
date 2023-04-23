import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'

/*export const atualizaPessoa = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
       const pessoa = await getRepository(Pessoa).update(id, req.body)
        if ( pessoa.affected == 0 ) {
            res.status(404).json({message:' Pessoa não encontrada '})
        }
        res.status(201).json({ message:  ` A pessoa de ID: ${id} foi atualizada com sucesso. `})
    } catch (error) {
        res.status(500).json({ message: ' Erro ao atualizar pessoa. '})
    }
}*/

export class AtualizaPessoa {
    async atualizaPessoa(req: Request, res: Response):Promise<any> {
    const { id } = req.params
    try {
       const pessoa = await getRepository(Pessoa).update(id, req.body)
        if ( pessoa.affected == 0 ) {
            res.status(404).json({message:' Pessoa não encontrada '})
        }
        res.status(201).json({ message:  ` A pessoa de ID: ${id} foi atualizada com sucesso. `})
    } catch (error) {
        res.status(500).json({ message: ' Erro ao atualizar pessoa. '})
    }
    }
}