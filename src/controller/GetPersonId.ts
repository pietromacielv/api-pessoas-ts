import { getRepository } from 'typeorm'
import { Person } from '../entity/Person'

export class GetPersonId {
    async getPersonId(id: number):Promise<Person> {
        const person = await getRepository(Person).findOne(id)
        return person
    }
}