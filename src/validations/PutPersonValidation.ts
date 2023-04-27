export class PutPersonValidation {
    validatePersonToUpdate(person):boolean {
        if (person.affected == 0) {
            return false
        }
        return true
    }
}