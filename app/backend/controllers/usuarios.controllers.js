import boom from "@hapi/boom";
import bcryptjs from "bcryptjs";
import { ObjectId } from "mongodb";
import { db } from "../config/database.js";
const usuarios = db.collection("usuarios");

export const getUsuarios = async (req, res, next) => {
  try {
    const data = await usuarios.find().toArray();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const getOneUsuario = async (req, res, next) => {
  try {
    const oid = new ObjectId(req.params.id);
    const data = await usuarios.findOne({ _id: oid });
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const createUsuario = async (req, res, next) => {
  try {
    const { password, email, ...rest } = req.body;

    const existeEmail = await usuarios.findOne({ email });
    if (existeEmail)
      throw boom.badRequest("El email ingresado ya está registrado");
    const salt = await bcryptjs.genSalt();
    const hashedPwd = await bcryptjs.hash(password, salt);

    const newField = await usuarios.insertOne({
      email,
      password: hashedPwd,
      ...rest,
    });
    res.status(200).json({
      message: "Dato ingresado con éxito",
      response: newField,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUsuario = async (req, res, next) => {
  try {
    
  } catch (err) {
    next(err);
  }
}