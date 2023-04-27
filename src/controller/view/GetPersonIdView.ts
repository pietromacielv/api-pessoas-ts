import { Response, Request } from "express";
import { GetPersonId } from "../GetPersonId";
import { GetPersonIdValidation } from "../../validations/GetPersonIdValidation";

export class GetPersonIdView {
    async personGetById(req: Request, res: Response) {
        const person = new GetPersonId();
        const getPersonBody = await person.getPersonId(Number(req.params.id))
        const validation = new GetPersonIdValidation
        if ( validation.validatePersonToGetById(getPersonBody) == false) {
            res.status(404).json({message: ' Error on getting person by id. '})
        }
        res.json({message: getPersonBody}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
