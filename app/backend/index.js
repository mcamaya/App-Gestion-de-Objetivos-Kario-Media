import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routesAPI from "./routes/index.js";
import { mongoClientConnection } from "./config/mongoClient.js";
import { mongooseConnection } from "./config/mongoose.js";
import { logErrors, isBoomError, errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

mongoClientConnection();
mongooseConnection();
routesAPI(app);
app.use(logErrors);
app.use(isBoomError);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});