import { UpdateResult, getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'

export class AtualizaPessoa {
    async atualizaPessoa(id: number, nome?: string, sobrenome?: string, idade?: number, peso?: number):Promise<UpdateResult> {
        const corpo = {id, nome, sobrenome, idade, peso}
        const pessoa = await getRepository(Pessoa).update(id, corpo)
        return pessoa;
    }
}
