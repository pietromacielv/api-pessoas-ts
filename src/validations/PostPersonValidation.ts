export class PostPersonValidation {
    validatePersonToCreate(firstBodyObject: string[], secondBodyObject: string[], thirdBodyObject: number[], fourthBodyObject: number[]):boolean {
        if (firstBodyObject.length == 0 || secondBodyObject.length == 0 || thirdBodyObject.length == 0 || fourthBodyObject.length == 0) {
            return true
        }
        false
    }
}