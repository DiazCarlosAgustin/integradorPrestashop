import { User } from './../interfaces/user.interfaces';
import { Schema, Types, model, Model } from "mongoose";

const UserSchema = new Schema<User>({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true,
        default: "Soy la descripcion",
    }
}, {
    timestamps:true, versionKey: false
})

const UserModel = model('users', UserSchema)

export default UserModel