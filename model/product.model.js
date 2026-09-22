import { model, Schema } from "mongoose"

const productSchema = new Schema({

    name: {
        type: String,
        trim:true,
        require: true
        
    },
    price: {
        type: Number,
        require: true,
        default: 0,
        min: 0
    },
    category: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },

    stock: {
        type: Number,
        min: 0,
        default: 0,
        require: true
    },

    rating: {
        type: Number,
        min: 0,
        default: 0,
        max: 5,
        require: true
    },

}, {
    timestamps: true
})


export const Product = model("product", productSchema)