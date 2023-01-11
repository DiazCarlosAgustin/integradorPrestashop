import { Request, Response } from "express";
import productService from "../services/products.services";
import { handelHTTP } from "../util/error.handle";

export = {
	getItem: async ({params}: Request, res: Response) => {
		try {
			const resItem = await productService.getProduct(params.id)
			res.json(resItem)
		} catch (err: any) {
			handelHTTP(res, err, 'ITEMS');
		}
	},
	getItems: async (req: Request, res: Response) => {
		try {
			const resItem = await productService.getAllProducts()
			res.json(resItem)
		} catch (err: any) {
			handelHTTP(res, err, 'ITEMS');
		}
	},
	postItem: async ({body}: Request, res: Response) => {
		try {
			const resItem = await productService.insertCars(body)
			res.send(JSON.stringify(resItem))
		} catch (err: any) {
			handelHTTP(res, err.message, 'ITEMS');
		}
	},
	updateItem: async ({params, body}: Request, res: Response) => {
		try {
			const resItem = await productService.updateCar(params.id, body)
			res.send(resItem)
		} catch (err: any) {
			handelHTTP(res, err, 'ITEMS');
		}
	},
	deleteItem: async ({params}: Request, res: Response) => {
		try {
			const resItem = await productService.deleteCar(params.id)
			res.send(resItem)
		} catch (err: any) {
			handelHTTP(res, err, 'ITEMS');
		}
	},
};
