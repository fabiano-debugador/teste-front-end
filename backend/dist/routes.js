"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const Authenticate_1 = require("./useCase/Authenticate");
const ListVideo_1 = require("./useCase/Video/ListVideo");
const DetailVideo_1 = require("./useCase/Video/DetailVideo");
const ensureAuthenticate_1 = require("./middlewares/ensureAuthenticate");
const route = (0, express_1.Router)();
exports.route = route;
route.post("/auth", (req, resp) => {
    return Authenticate_1.authenticateController.handle(req, resp);
});
route.get("/search", ensureAuthenticate_1.ensureAuthenticate, (req, resp) => {
    return ListVideo_1.listVideoController.handle(req, resp);
});
route.get("/detail", ensureAuthenticate_1.ensureAuthenticate, (req, resp) => {
    return DetailVideo_1.detailVideoController.handle(req, resp);
});
