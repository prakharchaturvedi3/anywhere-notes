import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import { authRouter } from "./routes/authRoutes.js";
import { pageRouter } from "./routes/pageRoutes.js";
import { ErrorHandler } from "./utils/errorUtils.js";

config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/page", pageRouter);

app.use(ErrorHandler);

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  console.log(`Server started listening on PORT: ${PORT}`);
});

export type page = {
  id: string
  content: string;
  tags: string[];
  title: string;
  userId: string;
  active: boolean;
};

export type user = {
  name: string;
  password: string;
  email: string;
};
