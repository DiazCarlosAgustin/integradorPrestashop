import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";
import axios from "axios";

export = {
	insertCars: async (item: Car) => {
		const responseInsert = await ItemModel.create(item);
		return responseInsert;
	},
	getAllProducts: async (): Promise<any> => {
		return new Promise<any>(async (resolve, reject) => {
			await axios
				.get(
					"http://UNAIFE1ZBC3SEPMFL1J5V97MMTWWKQUS@localhost:8888/api/products?display=full&output_format=JSON",
					{ headers: { "Content-Type": "application/json" } },
				)
				.then((response) => resolve(response.data.products))
				.catch((error) => reject(error));
		});
	},
	getProduct: async (id: string) => {
		return new Promise<any>(async (resolve, reject) => {
			await axios
				.get(
					`http://UNAIFE1ZBC3SEPMFL1J5V97MMTWWKQUS@localhost:8888/api/products/${id}?display=full&output_format=JSON`,
					{ headers: { "Content-Type": "application/json" } },
				)
				.then((response) => resolve(response.data.products))
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
