import { Request, Response } from "express";
import orderService from "../services/orders.services";
import { handelHTTP } from "../util/error.handle";

export = {
	getOrder: async ({params}: Request, res: Response) => {
		try {
			const resItem = await orderService.getOrder(params.id)
			res.json(resItem)
		} catch (err: any) {
			handelHTTP(res, err, 'ITEMS');
		}
	},
	getOrders: async (req: Request, res: Response) => {
		try {
			const resItem = await orderService.getAllOrders()
			res.json(resItem)
		} catch (err: any) {
			handelHTTP(res, err, 'ITEMS');
		}
	},
	// postItem: async ({body}: Request, res: Response) => {
	// 	try {
	// 		const resItem = await orderService.insertCars(body)
	// 		res.send(JSON.stringify(resItem))
	// 	} catch (err: any) {
	// 		handelHTTP(res, err.message, 'ITEMS');
	// 	}
	// },
	// updateItem: async ({params, body}: Request, res: Response) => {
	// 	try {orderService
	// 		const resItem = await productService.updateCar(params.id, body)
	// 		res.send(resItem)
	// 	} catch (err: any) {
	// 		handelHTTP(res, err, 'ITEMS');
	// 	}
	// },
	// deleteItem: async ({params}: Request, res: Response) => {
	// 	try {
	// 		const resItem = await productService.deleteCar(params.id)
	// 		res.send(resItem)
	// 	} catch (err: any) {
	// 		handelHTTP(res, err, 'ITEMS');
	// 	}
	// },
};
