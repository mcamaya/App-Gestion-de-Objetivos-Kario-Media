import { Router } from "express";
import * as service from "../controllers/areas.controllers.js";

const router = Router();

router.get('/', service.getAreas);

export default router;