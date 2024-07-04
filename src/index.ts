import express, { NextFunction, Request, Response, } from "express";
import publicidades from "./routes/publicidades.routes";
import upload from "./routes/upload.routes";
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());


const PORT = 3000;

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err.stack);
	res.status(500).json({ error: err.message });
});

app.use("/publicidades", publicidades);
app.use("/upload", upload);

app.listen(PORT, () => {
	console.log("server running on port " + PORT);
});
