import { getRepository } from 'typeorm'
import { Pessoa } from '../entity/Pessoa'



export class CriaPessoa {
   async criaPessoa(nome: string, sobrenome: string, idade: number, peso: number):Promise<Pessoa> {
    const pessoa = await getRepository(Pessoa).save({nome, sobrenome, idade, peso})
    return pessoa;
    
   }
}

