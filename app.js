import Express from "express";
import Morgan from "morgan";
import RutasComercio from "./routes/comercio.routes.js";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Morgan("dev"));
app.set("puerto", 3000);
app.use("/comercio", RutasComercio);

app.get("/", (req, res) => {
  res.send({ nombre: "Antony Duarte" });
});

export default app;
