import express, { type Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound";
import router from "./app/routes/routes";

const app: Express = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});


app.use(notFound);

export default app;