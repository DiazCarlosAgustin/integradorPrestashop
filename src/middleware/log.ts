import { NextFunction, Request, Response } from "express";

export = {
    logMiddleware: (req: Request, res: Response, next: NextFunction) => {
        const headers = req.headers
        const userAgent = headers["user-agent"]
        console.log(userAgent);
        next()
    }
}