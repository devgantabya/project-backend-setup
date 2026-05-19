import { Router } from "express";
import { OrderController } from "./order.controller";

const router: Router = Router();

// using mongoose
router.post("/", OrderController.createOrder);
router.get("/", OrderController.getOrders);
router.get("/:id", OrderController.getOrder);
router.patch("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

export const OrderRoutes = router;