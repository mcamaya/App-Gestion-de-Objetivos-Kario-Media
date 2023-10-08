import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./config/database.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

dbConnection();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});