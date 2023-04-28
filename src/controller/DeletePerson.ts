import { DeleteResult, getRepository } from 'typeorm'
import { Person } from '../entity/Person'

export class DeletePerson {
    async deletePerson(id: number):Promise<DeleteResult> {
    const person = await getRepository(Person).delete(id)
    return person
}
}