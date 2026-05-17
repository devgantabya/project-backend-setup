import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateSchema";
import userValidationSchema, { changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema } from "./auth.validation";

const router: Router = Router();

router.post("/login", validateRequest(loginSchema), AuthController.login);
router.post("/register", validateRequest(userValidationSchema), AuthController.register);
router.post("/change-password", validateRequest(changePasswordSchema), AuthController.changePassword);
router.post("/forgot-password", validateRequest(forgotPasswordSchema), AuthController.forgotPassword);

export const AuthRoutes = router;