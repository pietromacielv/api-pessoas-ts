import { DeleteResult } from "typeorm"

export class DeletePersonValidation {
    validatePersonToDelete(person: DeleteResult):boolean {
        if (person.affected == 0) {
            return true
        }
        false
    }
}