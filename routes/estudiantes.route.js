import estudiantesController from "../controllers/estudiantes.controller.js";
import express from "express";

const router=express.Router();

router.get("/estudiantes",estudiantesController.getAllEstudiantes)
router.post("/estudiantes",estudiantesController.postEstudiantes)

router.put("/estudiantes/update/all/:id",estudiantesController.putEstudiantes)

router.patch("/estudiantes/update/:id",estudiantesController.patchEstudiantes)
router.delete("/estudiantes/delete/:id",estudiantesController.deleteEstudiantes)


export default router