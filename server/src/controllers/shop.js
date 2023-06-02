import insertStaticData from "../addDataFunc.js";
import { Product } from "../models/products.js";

export const postProducts = async (req, res) => {
  try {
    await insertStaticData(req, res);
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res
      .status(200)
      .json({ message: "Data successfully loaded", data: products });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const productsData = await Product.find({
      productCategory: categoryId,
    });
    res
      .status(200)
      .json({ message: "Data successfully loaded", data: productsData });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};
