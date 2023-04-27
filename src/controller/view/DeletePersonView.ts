import { Response, Request } from "express";
import { DeletePerson } from "../DeletePerson";
import { DeletePersonValidation } from "../../validations/DeletePersonValidation";

export class DeletePersonView {
    async personDelete(req: Request, res: Response) {
        const person = new DeletePerson();
        const id = Number(req.params.id)
        const deletePerson = await person.deletePerson(id);
        const validation = new DeletePersonValidation();
        if (validation.validatePersonToDelete(deletePerson) == false) {
            res.json({message: `Error on deleting person: the person with id ${id} doesn't exists. `});
        }
        res.json({message: ' Person deleted succesfully. '}); // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
