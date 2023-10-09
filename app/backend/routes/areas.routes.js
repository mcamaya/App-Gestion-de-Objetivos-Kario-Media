import { Router } from "express";
import * as service from "../controllers/areas.controllers.js";
import * as schemas from "../schemas/areas.schema.js";
import { validateSchema } from "../middlewares/joiValidator.js";

const router = Router();

router.get("/", service.getAreas);
router.get(
  "/:id",
  validateSchema(schemas.getAreaSchema, "params"),
  service.getAreas
);

router.post(
  "/",
  validateSchema(schemas.createAreaSchema, "body"),
  service.createArea
);

router.patch(
  "/:id",
  [
    validateSchema(schemas.getAreaSchema, "params"),
    validateSchema(schemas.updateAreaSchema, "body")
  ],
  service.updateArea
);

router.delete(
  "/:id",
  validateSchema(schemas.getAreaSchema, "params"),
  service.deleteArea
);

export default router;
