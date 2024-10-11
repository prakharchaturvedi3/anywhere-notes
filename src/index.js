import express, { urlencoded } from "express";
import morgan from "morgan";
import { config } from "dotenv";
import { handleError } from "./utils/errorUtils.js";
import { authRouter } from "./routes/authRoutes.js";
import { pageRouter } from "./routes/pageRoutes.js";
config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/page", pageRouter);

app.use(handleError);

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  console.log(`Server started listening on PORT: ${PORT}`);
});
