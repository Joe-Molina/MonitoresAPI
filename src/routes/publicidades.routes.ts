import express, { NextFunction } from "express";
import {
  createPublicidad,
  DeletePublicidad,
  getPublicidades,
} from "../services/publicidades";
import { asignarPositions } from "../services/asignarPosistion";
import { updateEndDate, updateStartDate } from "../services/updateDate";
import { updateDuration } from "../services/updateDuration";

const router = express.Router();

router.get("/", async (_req, res, next: NextFunction) => {
  try {
    const publicidades = await getPublicidades();
    res.json(publicidades);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next: NextFunction) => {
  try {
    const newPublicidad = await createPublicidad(req.body);
    res.send(newPublicidad);
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res) => {

  const { fechaInicio, fechaFin, position, duration } =
    await req.body.edit;

  console.log(req.body.edit)

  const newPositions = await asignarPositions(position, req.body.id);
  const newDuration = await updateDuration(duration, req.body.id);
  const newEndDate = await updateEndDate(fechaFin, req.body.id);
  const newStartDate = await updateStartDate(fechaInicio, req.body.id);

  const data = {
    newDuration,
    newEndDate,
    newPositions,
    newStartDate,
  }

  return res.json(data);

});



router.delete("/", async (req, res, next: NextFunction) => {
  try {
    const { id } = req.body;
    const publiDeleted = await DeletePublicidad(id);
    res.json(publiDeleted);
  } catch (error) {
    next(error);
  }
});

export default router;
