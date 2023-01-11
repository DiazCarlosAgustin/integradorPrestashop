import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemsSchema = new Schema<Car>({
    color:{
        type: String
    },
    gas: {
        type: String,
        enum: ['gasoline','electric']
    },
    year: {
        type: Number
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps:true, versionKey: false
})

const ItemModel = model('items', ItemsSchema)

export default ItemModel