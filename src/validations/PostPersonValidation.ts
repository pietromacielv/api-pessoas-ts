export class PostPersonValidation {
    validatePersonToCreate(firstBodyObject, secondBodyObject, thirdBodyObject, fourthBodyObject):boolean {
        if (firstBodyObject.lenght == 0 || secondBodyObject.lenght == 0 || thirdBodyObject.lenght == 0 || fourthBodyObject.lenght == 0) {
            return false
        }
        return true
    }
}