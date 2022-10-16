import { Router } from "express";
import { authenticateController } from "./useCase/Authenticate";
import { listVideoController } from "./useCase/Video/ListVideo";
const route = Router();

route.post("/auth", (req, resp) => {
  return authenticateController.handle(req, resp);
});

route.get("/search", (req, resp) => {
  return listVideoController.handle(req, resp);
});

export { route };
