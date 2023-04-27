import { getRepository } from 'typeorm'
import { Person } from '../entity/Person'

export class PostPerson {
   async postPerson(name: string, surname: string, age: number, weight: number):Promise<Person> {
    const person = await getRepository(Person).save({name, surname, age, weight})
    return person;
    
   }
}

