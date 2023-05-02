import { NextFunction, Request, Response } from "express";

export function errorHandlerTool(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err.name == 'SyntaxError'){
        return res.status(400).json({error: 'Bad Request. Please review your syntaxes'})
    }

    if(err.name == 'RuntimeError'){
        return res.status(500).json({error: 'The server encountered an unexpected condition that prevented it from fulfilling the request.'})
    }

    if(err.name == 'NetworkError'){
        return res.status(503).json({error: 'The server is currently unable to handle the request due to a temporary overload or maintenance of the server.'})
    }
    
    if(err.name == 'IOError'){
        return res.status(404).json({error: 'Not found.'})
    }
}

