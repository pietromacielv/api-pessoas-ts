import { Response, Request, NextFunction } from "express";
import { GetPersonId } from "../GetPersonId";
import { GetPersonIdValidation } from "../../validations/GetPersonIdValidation";
import { possibleErrorMessages } from "../error_archives/errorMessages";

export class GetPersonIdView {
    async personGetById(req: Request, res: Response, next: NextFunction) {

        const person = new GetPersonId();
        const id = Number(req.params.id)
        try {
            const getPersonBody = await person.getPersonId(id)
        const validation = new GetPersonIdValidation
        if (validation.validatePersonToGetById(getPersonBody)) {
            throw new Error(possibleErrorMessages.invalidId(id));
        }
        res.json({message: getPersonBody}) // nao é preciso alterar o http status caso a resposta seja sucesso.
        } catch (error) {
            next(error)
        }
        
    }
}
