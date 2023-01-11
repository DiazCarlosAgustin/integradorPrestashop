import ItemModel from "../models/item";
import { Auth } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/user";
import bcrypt from "bcryptjs";
import { encrypt, verify } from "../util/bcrypt.handle";
import JwtHandle from "../util/jwt.handle";

export = {
	regusterNewUser: async ({name, email, password, description}: User) => {
		const Check = await UserModel.findOne({ email })
		
		if (Check) return "Already user"
		const passHashed = await encrypt(password)
		const registerUser = await UserModel.create({ name, email, password:passHashed, description })
		
		return registerUser
	},
	LogIngUser: async ({email, password}: Auth) => {
		const user = await UserModel.findOne({ email })
		if (!user) return "Not found user"
		
		const isTrue = await verify(password, user.password)
		
		if (!isTrue) return "Password incorrecta"
		
		const token = await JwtHandle.generateToken(user)
		return token
	},
};
