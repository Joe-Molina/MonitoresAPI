import express, { NextFunction } from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/",
  upload.single("file"),
  async (_req: any, _res: any, _next: NextFunction) => {}
);

export default router;
