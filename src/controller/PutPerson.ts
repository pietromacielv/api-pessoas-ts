import { UpdateResult, getRepository } from 'typeorm'
import { Person } from '../entity/Person'

export class PutPerson {
    async putPerson (id: number, name?: string, surname?: string, age?: number, weight?: number):Promise<UpdateResult> {
        const body = {id, name, surname, age, weight}
        const person = await getRepository(Person).update(id, body)
        return person;
    }
}
