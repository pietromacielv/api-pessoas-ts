export class PostPersonValidation {
    validatePersonToCreate(firstBodyObject, secondBodyObject, thirdBodyObject, fourthBodyObject):boolean {
        if (firstBodyObject.length == 0 || secondBodyObject.length == 0 || thirdBodyObject.length == 0 || fourthBodyObject.length == 0) {
            return true
        }
        false
    }
}