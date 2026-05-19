import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateSchema";
import { userLoginValidationSchema, userRegisterValidationSchema } from "./auth.validation";

const router: Router = Router();

// using prisma
// router.post("/login", validateRequest(userLoginValidationSchema), AuthController.login);
// router.post("/register", validateRequest(userRegisterValidationSchema), AuthController.register);
// router.get("/verify-email", AuthController.verifyEmail);


// using mongoose
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/users", AuthController.users);
router.get("/users/:id", AuthController.user);
router.patch("/users/:id", AuthController.updateUser);
router.delete("/users/:id", AuthController.deleteUser);

export const AuthRoutes = router;