import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'
import { Request, Response } from 'express'


export class GetPessoa {
    async getPessoa():Promise<any> {
    const pessoa = await getRepository(Pessoa).find()
    return pessoa
}
}