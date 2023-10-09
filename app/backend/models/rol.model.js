import { Schema, model } from "mongoose";

const RolSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  versionKey: false
});

export default model('roles', RolSchema);