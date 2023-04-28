import { Response, Request } from "express";
import { PostPerson } from "../PostPerson";
import { PostPersonValidation } from "../../validations/PostPersonValidation";
import { NumberValidation } from "../../validations/NumberValidation";

export class PostPersonView {
    async personCreate(req: Request, res: Response) {

        const ageAndWeightValidation = new NumberValidation()
        if (ageAndWeightValidation.validadeNotNegativeNumber(req.body.age, req.body.weight)){
            res.status(404).json({error: " The fields 'age' and 'weight' cannot be negative numbers. "})
        }

        const validation = new PostPersonValidation();
        if (validation.validatePersonToCreate(req.body.name, req.body.surname, req.body.age, req.body.weight)) {
            return res.status(400).json({error: 'Missing field. Please review the requisition body elements Name - Surname - Age - Weight.'});
        }

        const createPerson = new PostPerson();
        const createdPersonBody = await createPerson.postPerson(req.body.name, req.body.surname, req.body.age, req.body.weight);
        res.json({message: 'Person created successfully.', createdPersonBody});
    }
}
