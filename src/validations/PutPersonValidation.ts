import { UpdateResult } from "typeorm"

export class PutPersonValidation {
    validatePersonToUpdate(person: UpdateResult):boolean {
        if (person.affected == 0) {
            return true
        }
        false
    }
}