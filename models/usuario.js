import Mongoose from "mongoose";

const UsuarioSchema = Mongoose.Schema(
  {
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    correo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("Comercio", comercioSchema);
