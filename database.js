import Mongoose from "mongoose";

Mongoose.connect("mongodb://localhost/clase2")
  .then((db) => console.log("Ya en linea XD"))
  .catch((err) => console.log("No se conecta :("));

export default Mongoose;
