import { Response, Request } from "express";
import { GetPersonId } from "../GetPersonId";
import { GetPersonIdValidation } from "../../validations/GetPersonIdValidation";

export class GetPersonIdView {
    async personGetById(req: Request, res: Response) {

        const person = new GetPersonId();
        const id = Number(req.params.id)
        const getPersonBody = await person.getPersonId(id)

        const validation = new GetPersonIdValidation
        if (validation.validatePersonToGetById(getPersonBody)) {
            res.status(404).json({error: `Error on getting person by id: the person with id ${id} doesn't exists. `})
        }
        res.json({message: getPersonBody}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
