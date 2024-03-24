import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productImage: {
        type: String, // string bc img are usually stored in cloud buckets and an url of img is returned

    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, //refering category model
        ref: "Category",
        required: true
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)