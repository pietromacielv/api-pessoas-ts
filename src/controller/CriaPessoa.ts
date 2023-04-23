import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'

/*export const criaPessoa = async (req: Request, res: Response) => {
    try {
        await getRepository(Pessoa).save(req.body)
        res.status(201).json({ message: ' Pessoa criada com sucesso. '})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: ' Erro ao criar pessoa. '})
    } 
}*/

export class CriaPessoa {
   async criaPessoa(req: Request, res: Response):Promise<any> {
        try {
            await getRepository(Pessoa).save(req.body)
            res.status(201).json({ message: ' Pessoa criada com sucesso. '})
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: ' Erro ao criar pessoa. '})
        } 
}
}

