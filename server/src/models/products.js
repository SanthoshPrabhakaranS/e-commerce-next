import mongoose, { mongo } from "mongoose";

const ProductsSchema = new mongoose.Schema({
    productImg: {  type: String, required: true},
    productName: {  type: String, required: true},
    productPrice: {  type: String, required: true},
    productCategory: {  type: String, required: true}
})

export const Product = mongoose.models.Product || mongoose.model("Product", ProductsSchema);