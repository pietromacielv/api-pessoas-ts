import { Response, Request } from "express";
import { DeletePerson } from "../DeletePerson";
import { DeletePersonValidation } from "../../validations/DeletePersonValidation";
import { NumberValidation } from "../../validations/NumberValidation";

export class DeletePersonView {
    async personDelete(req: Request, res: Response) {

        const person = new DeletePerson();
        const id = Number(req.params.id)
        const deletePerson = await person.deletePerson(id);

        const ageAndWeightValidation = new NumberValidation()
        if (ageAndWeightValidation.validadeNotNegativeNumber(req.body.age, req.body.weight)){
            res.status(404).json({error: ' The fields "age" and "weight" cannot be negative numbers. '})
        }

        const validation = new DeletePersonValidation();
        if (validation.validatePersonToDelete(deletePerson)) {
            res.json({error: ` Error on deleting person: the person with id ${id} doesn't exists. `});
        }
        res.json({message: ' Person deleted succesfully. '}); // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
