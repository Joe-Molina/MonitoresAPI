import express, { NextFunction } from "express";
import {
  createPublicidad,
  DeletePublicidad,
  getPublicidades,
} from "../services/publicidades";

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
    res.send(await newPublicidad);
  } catch (error) {
    next(error);
  }
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
