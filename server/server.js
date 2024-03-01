import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { dbConnect } from "./dbConnect/dbConnect.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.listen(5000, () => {
  console.log("server is running ");
  dbConnect();
});
