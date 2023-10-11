import { Router } from "express";
import * as service from "../controllers/usuarios.controllers.js";
import { validateSchema } from "../middlewares/joiValidator.js";
import * as schemas from "../schemas/usuario.schema.js";
import verifyToken from "../middlewares/tokenValidator.js";
import isAdminRole from "../middlewares/isAdminRole.js";

const router = Router();

router.get("/", verifyToken, service.getUsuarios);

router.get("/no-admin", verifyToken, service.getNoAdmins); 
router.get(
  "/:id",
[verifyToken, validateSchema(schemas.getUsuarioSchema, "params")], 
  service.getOneUsuario
);
router.post(
  "/",
  [
    verifyToken,
    isAdminRole,
    validateSchema(schemas.createUsuarioSchema, "body"),
  ],
  service.createUsuario
);
router.patch(
  "/:id",
  [verifyToken, validateSchema(schemas.getUsuarioSchema, "params")],
  service.updateUsuario
),
  router.delete(
    "/:id",
    [
      verifyToken,
      isAdminRole,
      validateSchema(schemas.getUsuarioSchema, "params"),
    ],
    service.deleteUsuario
  );

export default router;
