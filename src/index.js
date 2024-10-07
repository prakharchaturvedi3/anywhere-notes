import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

import { authRouter } from "./routes/authRoutes.js";

const PORT = 3000;
config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
