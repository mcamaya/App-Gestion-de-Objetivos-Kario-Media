import { Router } from "express";
import * as service from "../controllers/roles.controllers.js";
import * as schemas from "../schemas/roles.schema.js";
import { validateSchema } from "../middlewares/joiValidator.js";

const router = Router();

router.get("/", service.getRoles);
router.get(
  "/:id",
  validateSchema(schemas.getRolesSchema, "params"),
  service.getOneRole
);

router.post(
  "/",
  validateSchema(schemas.createRolesSchema, "body"),
  service.createRole
);

router.patch(
  "/:id",
  [
    validateSchema(schemas.getRolesSchema, "params"),
    validateSchema(schemas.updateRolesSchema, "body")
  ],
  service.updateRole
);

router.delete(
  "/:id",
  validateSchema(schemas.getRolesSchema, "params"),
  service.deleteRole
);

export default router;
