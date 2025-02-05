"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const publicidades_routes_1 = __importDefault(require("./routes/publicidades.routes"));
const upload_routes_1 = __importDefault(require("./routes/upload.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 3000;
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});
app.use("/posts", publicidades_routes_1.default);
app.use("/upload", upload_routes_1.default);
app.use("/fotos", express_1.default.static("public/uploads"));
app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});
