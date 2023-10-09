import boom from "@hapi/boom";
import { ObjectId } from "mongodb";
import { db } from "../config/mongoClient.js";
import Area from "../models/area.model.js";

const areas = db.collection('areas');

export const getAreas = async (req, res) => {
  try {
    const data = await areas.find({}).toArray();
    res.status(200).json(data);
  } catch (err){
    next(err);
  }
}