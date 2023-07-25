import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { idValidation, userValidation } from "../middlewares/user.middleware.js";
const router = Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", idValidation, userValidation, userController.findById);
router.patch("/:id", idValidation, userValidation, userController.update);

export default router;