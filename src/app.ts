import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound";
import router from "./app/routes/routes";
import globalErrorHandler from "./app/middleware/globalError";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";

const app: Application = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// base URL
app.use("/api/v1", router);

app.use("/product", ProductRoutes);

app.use("/order", OrderRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});


app.use(notFound);
app.use(globalErrorHandler);

export default app;