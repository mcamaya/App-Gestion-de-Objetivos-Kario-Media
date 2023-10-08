import { Router } from "express";
import usuariosRouter from "./usuarios.routes.js";

export default function routesAPI (app){
  const router = Router();
  app.use('/api/v1', router);
  router.use('/usuarios', usuariosRouter);
}
