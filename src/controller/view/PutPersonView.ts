import { Response, Request, NextFunction } from "express";
import { PutPerson } from "../PutPerson";
import { GetPersonId } from "../GetPersonId";
import { PutPersonValidation } from "../../validations/PutPersonValidation";
import { NumberValidation } from "../../validations/NumberValidation";
import { possibleErrorMessages } from "../error_archives/errorMessages";



export class PutPersonView {
    async personUpdate(req: Request, res: Response, next: NextFunction) {
        const updateNewPerson = new PutPerson();
        const id = Number(req.params.id)
        try {
            const updatedPerson = await updateNewPerson.putPerson(id, req.body.name, req.body.surname, req.body.age, req.body.weight)

            const ageAndWeightValidation = new NumberValidation()
            if (ageAndWeightValidation.validadeNotNegativeNumber(req.body.age, req.body.weight)){
                throw new Error(possibleErrorMessages.fieldTypo)
            }
    
            const classValidation = new PutPersonValidation
            if (classValidation.validatePersonToUpdate(updatedPerson)) {
                throw new Error(possibleErrorMessages.invalidId(id))
            }
            const showUpdatedPerson = new GetPersonId();
            const entry = await showUpdatedPerson.getPersonId(id)
            res.json({message: ' Person updated successfully. ', entry}) // nao é preciso alterar o http status caso a resposta seja sucesso. 
        } catch (error) {
            next(error)
        }
        
    }
}

