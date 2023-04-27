import { Response, Request } from "express";
import { DeletePerson } from "../DeletePerson";
import { DeletePersonValidation } from "../../validations/DeletePersonValidation";

export class DeletePersonView {
    async personDelete(req: Request, res: Response) {
        const person = new DeletePerson();
        const deletePerson = await person.deletePerson(Number(req.params.id));
        const validation = new DeletePersonValidation();
        if (validation.validatePersonToDelete(deletePerson) == false) {
            res.json({message: ' Error when trying to delete person. '});
        }
        res.json({message: ' Person deleted succesfully. '}); // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
