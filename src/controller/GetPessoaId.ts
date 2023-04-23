import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'

/*export const getPessoaId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const pessoa = await getRepository(Pessoa).findOne(id)
        if ( pessoa == undefined ) {
            res.status(404).json({ message: ` Não existe nenhuma pessoa com ID: ${id} `})
        }
        return res.json(pessoa)
    } catch (error) {
    console.log(error)
    res.status(500).json({ message: ' Erro ao listar pessoa específica. '})
    }
}*/

export class GetPessoaId {
    async getPessoaId(req: Request, res: Response):Promise<any> {
        try {
            const { id } = req.params
            const pessoa = await getRepository(Pessoa).findOne(id)
            if ( pessoa == undefined ) {
                res.status(404).json({ message: ` Não existe nenhuma pessoa com ID: ${id} `})
            }
            return res.json(pessoa)
        } catch (error) {
        console.log(error)
        res.status(500).json({ message: ' Erro ao listar pessoa específica. '})
        }
    }
}