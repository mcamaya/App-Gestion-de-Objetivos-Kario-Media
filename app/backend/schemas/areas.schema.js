import Joi from "joi";

const id = Joi.string().hex().length(24);
const nombre = Joi.string().min(7).max(20);

export const getAreaSchema = Joi.object({
  id: id.required()
})

export const createAreaSchema = Joi.object({
  id,
  nombre: nombre.required()
});

export const updateAreaSchema = Joi.object({
  nombre
});