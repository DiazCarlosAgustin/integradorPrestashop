import { Request, Response } from "express";
import { handelHTTP } from "../util/error.handle";
import authServices from "../services/auth.services";

export = {
	registerController: async ({body}: Request, res: Response) => {
		try {
			const userRes = await authServices.regusterNewUser(body)
			res.send(userRes)
		} catch (err: any) {
			handelHTTP(res, err, 'AUTH');
		}
	},
	logInController: async ({body}: Request, res: Response) => {
		try {
			const userRes = await authServices.LogIngUser(body)
			res.send(userRes)
		} catch (err: any) {
			handelHTTP(res, err, 'AUTH');
		}
	},
};
