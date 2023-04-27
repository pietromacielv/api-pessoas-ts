import { getRepository } from 'typeorm'
import { Person } from '../entity/Person'

export class GetPerson {
    async getPerson():Promise<Person[]> {
    const person = await getRepository(Person).find()
    return person
}
}