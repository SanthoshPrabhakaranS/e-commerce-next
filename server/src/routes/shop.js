import express from "express";
import { getAllProducts, getProducts, postProducts } from "../controllers/shop.js";

const router = express.Router()

router.post("/post-products", postProducts)
router.get("/all-products", getAllProducts)
router.get("/products/:categoryId", getProducts)

export default router