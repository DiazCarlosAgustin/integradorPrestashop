import { User } from './../interfaces/user.interfaces';
import { sign, verify } from 'jsonwebtoken'
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET || 'secret01'
const generateToken = async (user:User) => {
    const jwt = await sign({user}, JWT_SECRET, { expiresIn: '2d' })
    return jwt
}
const verifyTokend = async () => {}
export = {
    generateToken,verifyTokend
}