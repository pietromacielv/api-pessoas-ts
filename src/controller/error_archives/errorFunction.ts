import { NextFunction, Request, Response } from "express";

export function errorHandlerTool(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err.message.includes("doesn't exist")){
        return res.status(404).json({error: err.message})
    }
}

