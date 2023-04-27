import { Response, Request } from "express";
import { PostPerson } from "../PostPerson";
import { PostPersonValidation } from "../../validations/PostPersonValidation";

export class PostPersonView {
    async personCreate(req: Request, res: Response) {
        const createPerson = new PostPerson();
        const createdPersonBody = await createPerson.postPerson(req.body.name, req.body.surname, req.body.age, req.body.weight)
        const validation = new PostPersonValidation
        if (validation.validatePersonToCreate(req.body.name, req.body.surname, req.body.age, req.body.weight) == false) {
            res.status(400).json({message: ' Missing field. Please review the requisition body elements Name - Surname - Age - Weight. '}) // o .status foi usado para alterar o http status para diferente de 200, que é o padrão
        }
        res.json({message: ' Person created successfully. ', createdPersonBody}) // nao é preciso alterar o http status caso a resposta seja sucesso.
    }
}
