import { Response, Request, NextFunction } from "express";
import { DeletePerson } from "../DeletePerson";
import { possibleErrorMessages } from "../error_archives/errorMessages";
import { DeletePersonValidation } from "../../validations/DeletePersonValidation";



export class DeletePersonView {
    async personDelete(req: Request, res: Response, next: NextFunction) {
        const person = new DeletePerson();
        const id = Number(req.params.id)
        try {
            const deletePerson = await person.deletePerson(id);

            const validation = new DeletePersonValidation();
            if (validation.validatePersonToDelete(deletePerson)) {
                throw new Error(possibleErrorMessages.invalidId(id));
            }
            res.json({message: 'Person deleted successfully.'});
        } catch (error) {
            next(error);
        }
    }
}
