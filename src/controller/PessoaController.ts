import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'

export const getPessoa = async (req: Request, res: Response) => {
    try {
        const pessoa = await getRepository(Pessoa).find()
    return res.json(pessoa);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: ' Erro ao listar pessoas. '})
    }
};

export const criaPessoa = async (req: Request, res: Response) => {
    try {
        await getRepository(Pessoa).save(req.body)
        res.status(201).json({ message: ' Pessoa criada com sucesso. '})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: ' Erro ao criar pessoa. '})
    } 
}

export const getPessoaId = async (req: Request, res: Response) => {
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

export const atualizaPessoa = async (req: Request, res: Response) => {
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

export const deletaPessoa = async (req: Request, res: Response) => {
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

