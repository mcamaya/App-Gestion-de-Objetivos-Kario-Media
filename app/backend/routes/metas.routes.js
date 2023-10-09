import { Router } from "express";
import { validateSchema } from "../middlewares/joiValidator.js";
import * as schemas from "../schemas/metas.schema.js";
import * as service from "../controllers/metas.controllers.js";

const router = Router();

router.get("/", service.getMetas);
router.post(
  "/add-tasks/:id",
  [
    validateSchema(schemas.getMetasSchema, "params"),
    validateSchema(schemas.añadirTareas, "body"),
  ],
  service.añadirTareas
);
router.post(
  "/",
  validateSchema(schemas.createMetasSchema, "body"),
  service.createMeta
);

router.patch(
  "/:id",
  validateSchema(schemas.updateMetasSchema, "body"),
  service.editarMeta
);

export default router;
