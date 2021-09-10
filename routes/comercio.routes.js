import Router from "express";
import comercioController from "../controllers/comercioController.js";

const router = Router();

router.get("/listado", comercioController.listado);
router.post("/registrar", comercioController.registrar);
router.put("/:id", comercioController.editar);
router.delete("/:id", comercioController.eliminar);

export default router;
