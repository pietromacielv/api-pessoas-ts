import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'

export class GetPessoaId {
    async getPessoaId(id: number):Promise<Pessoa> {
        const pessoa = await getRepository(Pessoa).findOne(id)
        return pessoa
    }
}