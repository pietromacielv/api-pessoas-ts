import { Response, Request, NextFunction } from "express";
import { PostPerson } from "../PostPerson";
import { PostPersonValidation } from "../../validations/PostPersonValidation";
import { NumberValidation } from "../../validations/NumberValidation";
import { possibleErrorMessages } from "../error_archives/errorMessages";

export class PostPersonView {
    async personCreate(req: Request, res: Response, next: NextFunction) {
        try {
            const ageAndWeightValidation = new NumberValidation()
        if (ageAndWeightValidation.validadeNotNegativeNumber(req.body.age, req.body.weight)){
            throw new Error(possibleErrorMessages.fieldTypo)
        }

        const validation = new PostPersonValidation();
        if (validation.validatePersonToCreate(req.body.name, req.body.surname, req.body.age, req.body.weight)) {
            throw new Error(possibleErrorMessages.fieldError)
        }
        const createPerson = new PostPerson();
        const createdPersonBody = await createPerson.postPerson(req.body.name, req.body.surname, req.body.age, req.body.weight);
        
        res.json({message: 'Person created successfully.', createdPersonBody});
        } catch (error) {
            next(error)
        }
        
    }
}
