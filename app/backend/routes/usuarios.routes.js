import { Router } from "express";
import * as service from "../controllers/usuarios.controllers.js";
import { validateSchema } from "../middlewares/joiValidator.js";
import * as schemas from "../schemas/usuario.schema.js";
const router = Router();

router.get("/", service.getUsuarios);
router.get(
  "/:id",
  validateSchema(schemas.getUsuarioSchema, "params"),
  service.getOneUsuario
);
router.post(
  "/",
  validateSchema(schemas.createUsuarioSchema, "body"),
  service.createUsuario
);
router.patch(
  "/:id",
  validateSchema(schemas.getUsuarioSchema, "params"),
  service.updateUsuario
),
router.delete(
  "/:id",
  validateSchema(schemas.getUsuarioSchema, "params"),
  service.deleteUsuario
);

export default router;
