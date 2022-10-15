"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const Authenticate_1 = require("./useCase/Authenticate");
// import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
const route = (0, express_1.Router)();
exports.route = route;
route.post("/auth", (req, resp) => {
    return Authenticate_1.authenticateController.handle(req, resp);
});
