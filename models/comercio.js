import Mongoose from "mongoose";

const comercioSchema = Mongoose.Schema(
  {
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("Comercio", comercioSchema);
