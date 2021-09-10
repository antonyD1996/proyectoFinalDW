import App from "./app.js";
import DB from "./database.js";

App.listen(App.get("puerto"), () =>
  console.log("Servidor corriendo en el puerto " + App.get("puerto"))
);
