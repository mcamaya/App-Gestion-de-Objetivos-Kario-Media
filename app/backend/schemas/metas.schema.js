import Joi from "joi";

const id = Joi.string().hex().length(24);
const nombre = Joi.string().min(8).max(20);
const descripcion = Joi.string().min(15).max(40);
const dificultad = Joi.string().valid('Alta', 'Baja', 'Media');
const fechaInicio = Joi.date().greater('1-1-2023');
const fechaFinal = Joi.date().greater('1-1-2023').less(Joi.ref('fechaInicio'));
const metodologia = Joi.string();
const cumplimiento = Joi.number().min(0).max(100).default(0);
const area = Joi.string().hex().length(24);
const integrantes = Joi.array().items(Joi.string().hex().length(24));
const tareas = Joi.array().items({
  titulo: Joi.string().required,
  instrucciones: Joi.string().required(),
  tiempoHoras: Joi.number().required()
});


export const getMetasSchema = Joi.object({
  id: id.required()
})

export const createMetasSchema = Joi.object({
  id,
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  dificultad: dificultad.required(),
  fechaInicio: fechaInicio.required(),
  fechaFinal: fechaFinal.required(),
  metodologia: metodologia.required(),
  area: area.required(),
  cumplimiento,
  integrantes,
  tareas
});

export const updateMetasSchema = Joi.object({
  nombre,
  descripcion,
  dificultad,
  fechaInicio,
  fechaFinal,
  metodologia,
  area,
  cumplimiento,
  integrantes,
  tareas
});