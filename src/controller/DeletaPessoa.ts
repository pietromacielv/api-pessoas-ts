import { DeleteResult, getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'


export class DeletaPessoa {
    async deletaPessoa(id: number):Promise<DeleteResult> {
    const pessoa = await getRepository(Pessoa).delete(id)
    return pessoa
}
}