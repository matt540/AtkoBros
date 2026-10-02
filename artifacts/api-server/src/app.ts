import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

const allowedOrigins = [
  "https://atkobroslandscaping.com",
  "https://www.atkobroslandscaping.com",
  /\.replit\.dev$/,
  /\.replit\.app$/,
];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
