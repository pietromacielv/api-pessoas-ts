export class GetPersonIdValidation {
    validatePersonToGetById(body):boolean {
        if (body == undefined) {
            return false
        }
        return true
    }
}