import Joi from "joi";

const id = Joi.string().hex().length(24);
const nombre = Joi.string().min(4).max(15);

export const getRolesSchema = Joi.object({
  id: id.required()
})

export const createRolesSchema = Joi.object({
  id,
  nombre: nombre.required()
});

export const updateRolesSchema = Joi.object({
  nombre
});