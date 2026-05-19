import { Router } from "express";
import { ProductController } from "./product.controller";

const router: Router = Router();

// Product routes
router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.products);
router.get("/products/:id", ProductController.product);
router.patch("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

export const ProductRoutes = router;