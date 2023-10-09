import { Schema, model } from "mongoose";

const MetaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    dificultad: {
      type: String,
      required: true,
      enum: ["Alta", "Baja", "Media"],
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFinal: {
      type: Date,
      required: true,
    },
    metodologia: {
      type: String,
      required: true,
    },
    area: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "areas",
    },
    integrantes: [{
      type: Schema.Types.ObjectId,
      ref: 'usuarios'
    }],
    tareas: [
      {
        titulo: {
          type: String,
        },
        instrucciones: {
          type: String,
        },
        tiempoHoras: {
          type: Number,
        },
      },
    ],
    cumplimiento: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export default model("metas", MetaSchema);
