import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";
import axios from "axios";

export = {
	insertOrder: async (item: Car) => {
		const responseInsert = await ItemModel.create(item);
		return responseInsert;
	},
	getAllOrders: async (): Promise<any> => {
		return new Promise<any>(async (resolve, reject) => {
			await axios
				.get(
					"http://UNAIFE1ZBC3SEPMFL1J5V97MMTWWKQUS@localhost:8888/api/orders/?display=full&output_format=JSON",
					{ headers: { "Content-Type": "application/json" } },
				)
				.then((response) => resolve(response.data.orders))
				.catch((error) => reject(error));
		});
	},
	getOrder: async (id: string) => {
		return new Promise<any>(async (resolve, reject) => {
			await axios
				.get(
					`http://UNAIFE1ZBC3SEPMFL1J5V97MMTWWKQUS@localhost:8888/api/orders/${id}?display=full&output_format=JSON`,
					{ headers: { "Content-Type": "application/json" } },
				)
				.then((response) => resolve(response.data.orders))
				.catch((error) => reject(error));
		});
	},
	updateCar: async (id: string, item: Car) => {
		return await ItemModel.findOneAndUpdate({ _id: id }, item, {
			new: true,
		});
	},
	deleteCar: async (id: string) => {
		return await ItemModel.findOneAndRemove({ _id: id });
	},
};
