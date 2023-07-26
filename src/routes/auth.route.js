import { Router } from "express";
import { login, confirm } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/", login);
router.get("/confirm", authMiddleware, confirm );

export default router;