import { Response } from "express";

const handelHTTP = (res: Response, error: string, location: string) => {
    res.status(500)
    res.send({error, module: location})
}
export {handelHTTP}