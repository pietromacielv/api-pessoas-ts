import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'

/*export const deletaPessoa = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
       const pessoa = await getRepository(Pessoa).delete(id)
        if ( pessoa.affected == 0 ) {
            res.status(404).json({message:' Pessoa não encontrada '})
        }
        res.status(201).json({ message:  ` A pessoa de ID: ${id} foi deletada com sucesso. `})
    } catch (error) {
        res.status(500).json({ message: ' Erro ao deletar pessoa. '})
    }
}*/

export class DeletaPessoa {
    async deletaPessoa(req: Request, res: Response):Promise<any> {

    const { id } = req.params
    try {
       const pessoa = await getRepository(Pessoa).delete(id)
        if ( pessoa.affected == 0 ) {
            res.status(404).json({message:' Pessoa não encontrada '})
        }
        res.status(201).json({ message:  ` A pessoa de ID: ${id} foi deletada com sucesso. `})
    } catch (error) {
        res.status(500).json({ message: ' Erro ao deletar pessoa. '})
    }

    }
}