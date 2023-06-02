import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import hemlet from "helmet";
import morgan from "morgan";
import path from "path";
import authRoutes from "./routes/auth.js"
import shopRoutes from "./routes/shop.js"

const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(hemlet());
app.use(hemlet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//ENDPOINTS
app.use("/auth", authRoutes)
app.use("/shop", shopRoutes)

//MongoDB Connection
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER IS RUNNNING IN ${PORT}...`));
  })
  .catch((error) => console.log(`${error} did not connect!`));