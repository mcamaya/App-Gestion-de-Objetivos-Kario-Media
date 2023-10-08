import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./config/database.js";
import { logErrors, isBoomError, errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(logErrors);
app.use(isBoomError);
app.use(errorHandler);

dbConnection();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});