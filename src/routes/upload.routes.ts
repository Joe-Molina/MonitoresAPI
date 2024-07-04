import express, { NextFunction } from "express";

const router = express.Router();

router.post("/", async (req, res, next: NextFunction) => {
  try {
    const data = await req.body.formData();
    return res.json(data);

  } catch (error) {
    next(error);
  } finally {
    return;
  }

});

export default router;
