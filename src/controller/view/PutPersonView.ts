import { Response, Request } from "express";
import { PutPerson } from "../PutPerson";
import { GetPersonId } from "../GetPersonId";
import { PutPersonValidation } from "../../validations/PutPersonValidation";


export class PutPersonView {
    async personUpdate(req: Request, res: Response) {
        const updateNewPerson = new PutPerson();
        const id = Number(req.params.id)
        const updatedPerson = await updateNewPerson.putPerson(id, req.body.nome, req.body.sobrenome, req.body.idade, req.body.peso)
        const validation = new PutPersonValidation
        if (validation.validatePersonToUpdate(updatedPerson) == false) {
            res.status(404).json({error: `Error on updating person: the person with id ${id} doesn't exists. `  })
        }
        const showUpdatedPerson = new GetPersonId();
        const entry = await showUpdatedPerson.getPersonId(id)
        res.json({message: ' Person updated successfully. ', entry}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}

