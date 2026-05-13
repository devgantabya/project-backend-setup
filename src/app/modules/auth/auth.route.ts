import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateSchema";
import { changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema } from "./auth.validation";

const router: Router = Router();

router.get("/login", validateRequest(loginSchema), AuthController.login);
router.get("/register", validateRequest(registerSchema), AuthController.register);
router.get("/change-password", validateRequest(changePasswordSchema), AuthController.changePassword);
router.get("/forgot-password", validateRequest(forgotPasswordSchema), AuthController.forgotPassword);

export const AuthRoutes = router;