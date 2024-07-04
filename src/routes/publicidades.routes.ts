import express, { NextFunction } from "express";
import { getPublicidades } from "../services/publicidades";
import { prisma } from "../libs/prisma";


const router = express.Router();

router.get("/", async (_req, res, next: NextFunction) => {
  try {

    const publicidades = await getPublicidades()
    res.json(publicidades);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next: NextFunction) => {
  try {

    const { name, type, duration, fecha_inicio, Fecha_Fin } =
      await req.body

    console.log(name, type, duration, fecha_inicio, Fecha_Fin)

    const newPublicidad = await prisma.publicidad.create({
      data: {
        name: name,
        type: type,
        duration: duration,
        fecha_inicio: fecha_inicio,
        Fecha_Fin: Fecha_Fin,
      },
    });

    res.json(newPublicidad);

  } catch (error) {
    next(error);
  }

});

export default router;