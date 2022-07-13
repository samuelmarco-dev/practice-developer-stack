import { Router } from "express";
import questionRouter from "./questionRouter.js";

const router = Router();
router.use(questionRouter);

export default router;