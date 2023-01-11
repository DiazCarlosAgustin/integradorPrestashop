import { Response } from "express";
import { hash, compare } from "bcryptjs"

const encrypt = async (password: string) => {
    return await hash(password, 10)
}

const verify = async (password: string, passwordHash: string) => {
    return await compare(password, passwordHash)
}
export {verify,encrypt}