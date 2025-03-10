"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listVideoController = exports.listVideoUseCase = void 0;
const VideoRepository_1 = require("../../../repositories/implementations/VideoRepository");
const ListVideoController_1 = require("./ListVideoController");
const ListVideoUseCase_1 = require("./ListVideoUseCase");
const videoRepository = new VideoRepository_1.VideoRepository();
const listVideoUseCase = new ListVideoUseCase_1.ListVideoUseCase(videoRepository);
exports.listVideoUseCase = listVideoUseCase;
const listVideoController = new ListVideoController_1.ListVideoController(listVideoUseCase);
exports.listVideoController = listVideoController;
