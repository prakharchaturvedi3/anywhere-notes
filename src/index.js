import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import { authRouter } from "./routes/authRoutes.js";
import { pageRouter } from "./routes/pageRoutes.js";
import { urlencoded } from "express";
config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/page", pageRouter);
app.use((err, req, res, next) => {
  res.status(500);
  res.send(err.message);
  res.end();
});
const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  console.log(`Server started listening on PORT: ${PORT}`);
});
