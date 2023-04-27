import { DeleteResult, getRepository } from 'typeorm'
import { Person } from '../entity/Person'
import { Request, Response } from 'express'


export class DeletePerson {
    async deletePerson(id: number):Promise<DeleteResult> {
    const person = await getRepository(Person).delete(id)
    return person
}
}