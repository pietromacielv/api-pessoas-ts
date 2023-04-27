import { Response, Request } from "express";
import { GetPerson } from "../GetPerson";

export class GetPersonView {
    async personGet(req: Request, res: Response) {
        const person = new GetPerson();
        const getPersonBody = await person.getPerson()
        res.json({message: getPersonBody}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}