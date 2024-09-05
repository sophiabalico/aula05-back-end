import { Router } from "express";
import emocoesRoutes from "./emocoes.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello, World!" });
});

routes.use("/emocoes", emocoesRoutes);

export default routes;
