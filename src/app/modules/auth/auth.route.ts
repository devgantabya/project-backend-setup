import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateSchema";
import { userLoginValidationSchema, userRegisterValidationSchema } from "./auth.validation";

const router: Router = Router();

router.post("/login", validateRequest(userLoginValidationSchema), AuthController.login);
router.post("/register", validateRequest(userRegisterValidationSchema), AuthController.register);
router.get("/verify-email", AuthController.verifyEmail);

export const AuthRoutes = router;