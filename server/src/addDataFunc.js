import { products } from "./data/data.js";
import { Product } from "./models/products.js";

export default async function insertStaticData(req, res) {
  try {
    // Insert the static data into the database using the Product model
    await Product.insertMany(products);

    res.status(200).json({ message: "Static data inserted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
