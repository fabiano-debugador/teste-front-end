import { Router } from "express";
import { authenticateController } from "./useCase/Authenticate";
import { listVideoController } from "./useCase/Video/ListVideo";
import { detailVideoController } from "./useCase/Video/DetailVideo";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
const route = Router();

route.post("/auth", (req, resp) => {
  return authenticateController.handle(req, resp);
});

route.get("/search", ensureAuthenticate, (req, resp) => {
  return listVideoController.handle(req, resp);
});

route.get("/detail", ensureAuthenticate, (req, resp) => {
  return detailVideoController.handle(req, resp);
});

export { route };
