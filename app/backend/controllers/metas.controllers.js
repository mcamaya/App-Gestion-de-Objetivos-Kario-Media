import boom from "@hapi/boom";
import { ObjectId } from "mongodb";
import { db } from "../config/mongoClient.js";
import Meta from "../models/meta.model.js";
import Usuario from "../models/usuario.model.js";
const metas = db.collection("metas");
const usuarios = db.collection("usuarios");

export const getMetas = async (req, res, next) => {
  try {
    const data = await metas.find({}).toArray();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const createMeta = async (req, res, next) => {
  try {
    const newData = await new Meta({ ...req.body });
    await newData.save();
    res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
};

export const editarMeta = async (req, res, next) => {
  try {
    const { integrantes, ...remaining } = req.body;
    const { id } = req.params;
    const existeMeta = await Meta.findOne({ _id: id });
    if (!existeMeta)
      throw boom.notFound("Meta ID no encontrado en la base de datos");

    /* validar si existen los id enviados en el campo integrantes */
    if (integrantes) {
      Promise.all(
        integrantes.map(async (user) => {
          if (!(await Usuario.findOne({ _id: user }))) {
            throw boom.notFound(
              `Integrante con ID ${user} no existe en la base de datos`
            );
          }
        })
      ).catch((err) => next(err));
    }

    const newData = await Meta.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
};
