import { Router } from "express";
import { validateSchema } from "../middlewares/joiValidator.js";
import * as schemas from "../schemas/metas.schema.js";
import * as service from "../controllers/metas.controllers.js";

const router = Router();

router.get("/", service.getMetas);
router.post(
  "/",
  validateSchema(schemas.createMetasSchema, "body"),
  service.createMeta
);

router.patch('/:id', service.editarMeta);

export default router;
