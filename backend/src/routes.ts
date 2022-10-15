import { Router } from "express";
import { authenticateController } from "./useCase/Authenticate";

const route = Router();

route.post("/auth", (req, resp) => {
  return authenticateController.handle(req, resp);
});

export { route };
