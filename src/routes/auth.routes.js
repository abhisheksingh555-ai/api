import { Router } from "express";
// import { profile } from "../controllers/profile.controller";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
// import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;

