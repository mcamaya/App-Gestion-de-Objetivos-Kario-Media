import boom from "@hapi/boom";
import { ObjectId } from "mongodb";
import { db } from "../config/mongoClient.js";
import Meta from "../models/meta.model.js";
import Usuario from "../models/usuario.model.js";
import Area from "../models/area.model.js";
import date from "../middlewares/dateValidator.js";
const metas = db.collection("metas");

export const getMetas = async (req, res, next) => {
  try {
    const data = await metas
      .aggregate([
        { $match: { _id: { $exists: true } } },
        {
          $lookup: {
            from: "areas", // collection
            localField: "area",
            foreignField: "_id",
            as: "area",
          },
        },
        {
          $lookup: {
            from: "usuarios", // collection
            localField: "tareas.integrantes",
            foreignField: "_id",
            as: "tareas.integrantes",
          },
        },
      ])
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const getOneMeta = async (req, res, next) => {
  try {
    const oid = new ObjectId(req.params.id);
    const [data] = await metas
      .aggregate([
        { $match: { _id: oid } },
        {
          $lookup: {
            from: "areas", // collection
            localField: "area",
            foreignField: "_id",
            as: "area",
          },
        },
        {$unwind: {
          "path": "$tareas.integrantes"
        }},
        {
          "$lookup": {
            "from": "usuarios",
            "foreignField": "_id",
            "localField": "tareas.integrantesData",
            "let": {
              "Ttitulo": "$tareas.titulo",
              "Tinstrucciones": "$tareas.instrucciones"
            },
            "pipeline": [
              {
                "$project": {
                  "_id": 0,
                  "tenantId": "$_id",
                  "titulo": "$$Ttitulo",
                  "tenant": "$$ROOT"
                }
              }
            ],
            "as": "associatedTenants"
          }
        },
      ])
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const createMeta = async (req, res, next) => {
  try {
    const { area, fechaInicio, fechaFinal, ...data } = req.body;
    const [existeArea, Inicio, Fin] = await Promise.all([
      Area.find({ _id: area }),
      date(fechaInicio),
      date(fechaFinal),
    ]);
    if (!existeArea)
      throw boom.notFound("Área ID no encontrado en la base de datos");
    const body = {
      area,
      fechaInicio: Inicio,
      fechaFinal: Fin,
      ...data,
    };
    const newData = new Meta(body);
    await newData.save();
    res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
};

export const editarMeta = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existeMeta = await Meta.findOne({ _id: id });
    if (!existeMeta)
      throw boom.notFound("Meta ID no encontrado en la base de datos");
    const { area, fechaInicio, fechaFinal, ...data } = req.body;
    const [existeArea, Inicio, Fin] = await Promise.all([
      Area.find({ _id: area }),
      date(fechaInicio),
      date(fechaFinal),
    ]);
    if (!existeArea)
      throw boom.notFound("Área ID no encontrado en la base de datos");
    const body = {
      area,
      fechaInicio: Inicio,
      fechaFinal: Fin,
      ...data,
    };
    const newData = await Meta.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
};

export const añadirTareas = async (req, res, next) => {
  try {
    const { tareas } = req.body;
    /* validar si existen los id enviados en el campo integrantes */
      await Promise.all(
        tareas.map((tarea) => {
          tarea.integrantes.map(async (user) => {
          try {
            if (!(await Usuario.findOne({ _id: user }))) {
              throw boom.notFound(
                `Integrante con ID ${user} no existe en la base de datos. Tarea ${JSON.stringify(tarea)}`
              );
            }
          } catch (err) {
            next(err);
          }
          });
        })
      ).catch((err) => next(err));
    const newData = await Meta.findOneAndUpdate(
      { _id: req.params.id },
      { tareas },
      { new: true }
    );
    res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
};

export const getPorcentajeCheck = async (req, res, next) => {
  try {
    const oid = new ObjectId(req.params.id);
    const [data] = await metas
      .aggregate([
        { $match: { _id: oid } },
        {
          $project: {
            _id: 1,
            nombre: 1,
            tareasCheckTrue: {
              $size: {
                $filter: {
                  input: "$tareas",
                  as: "tarea",
                  cond: { $eq: ["$$tarea.check", true] },
                },
              },
            },
            tareasCheckFalse: {
              $size: {
                $filter: {
                  input: "$tareas",
                  as: "tarea",
                  cond: { $eq: ["$$tarea.check", false] },
                },
              },
            },
          },
        },
      ])
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
