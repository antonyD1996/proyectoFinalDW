import Comercio from "../models/comercio.js";

const controlador = {};

controlador.listado = async (req, res) => {
  console.log("Prueba");
  const comercios = await Comercio.find();
  console.log(comercios);
  res.json(comercios);
};

controlador.registrar = async (req, res) => {
  const nuevo = new Comercio(req.body);
  await nuevo.save();
  res.json(nuevo);
};

controlador.editar = async (req, res) => {
  const comercio = await Comercio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.json(comercio);
};

controlador.eliminar = async (req, res) => {
  const comercio = await Comercio.findByIdAndRemove(req.params.id);
  res.json(comercio);
};

export default controlador;
