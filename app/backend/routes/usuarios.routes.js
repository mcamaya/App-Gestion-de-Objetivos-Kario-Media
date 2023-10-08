import { Router } from "express";
import * as ctrl from "../controllers/usuarios.controllers.js";
import { validateSchema } from "../middlewares/joiValidator.js";
import * as schemas from "../schemas/usuario.schema.js";
const router = Router();

router.get("/", ctrl.getUsuarios);
router.get(
  "/:id",
  validateSchema(schemas.getUsuarioSchema, "params"),
  ctrl.getOneUsuario
);
router.post(
  "/",
  validateSchema(schemas.createUsuarioSchema, "body"),
  ctrl.createUsuario
);

export default router;
