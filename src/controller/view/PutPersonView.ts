import { Response, Request } from "express";
import { PutPerson } from "../PutPerson";
import { GetPersonId } from "../GetPersonId";
import { PutPersonValidation } from "../../validations/PutPersonValidation";
import { NumberValidation } from "../../validations/NumberValidation";



export class PutPersonView {
    async personUpdate(req: Request, res: Response) {
        const updateNewPerson = new PutPerson();
        const id = Number(req.params.id)
        const updatedPerson = await updateNewPerson.putPerson(id, req.body.name, req.body.surname, req.body.age, req.body.weight)

        const ageAndWeightValidation = new NumberValidation()
        if (ageAndWeightValidation.validadeNotNegativeNumber(req.body.age, req.body.weight)){
            res.status(404).json({error: ' The fields "age" and "weight" cannot be negative numbers. '})
        }

        const classValidation = new PutPersonValidation
        if (classValidation.validatePersonToUpdate(updatedPerson)) {
            res.status(404).json({error: ` Error on updating person: the person with id ${id} doesn't exists. `  })
        }

        const showUpdatedPerson = new GetPersonId();
        const entry = await showUpdatedPerson.getPersonId(id)
        res.json({message: ' Person updated successfully. ', entry}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}

