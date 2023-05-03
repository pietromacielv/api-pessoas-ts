import { NextFunction, Request, Response } from "express";

export function errorHandlerTool(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err.message.startsWith("InvalidID")){
        return res.status(404).json({error: err.message})
    }
    if(err.message.startsWith("FieldTypo")){
        return res.status(400).json({error: err.message})
    }
    if(err.message.startsWith("FieldError")){
        return res.status(400).json({error: err.message})
    }
    return res.status(500).json({error: 'Internal Server Error.'})
}

