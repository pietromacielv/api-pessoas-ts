import { Person } from "../entity/Person"

export class GetPersonIdValidation {
    validatePersonToGetById(body: Person):boolean {
        if (body == undefined) {
            return true
        }
        false
    }
}