export class DeletePersonValidation {
    validatePersonToDelete(person):boolean {
        if (person.affected == 0) {
            return true
        }
        false
    }
}