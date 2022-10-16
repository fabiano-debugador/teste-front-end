"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailVideoController = exports.detailVideoUseCase = void 0;
const VideoRepository_1 = require("../../../repositories/implementations/VideoRepository");
const DetailVideoController_1 = require("./DetailVideoController");
const DetailVideoUseCase_1 = require("./DetailVideoUseCase");
const videoRepository = new VideoRepository_1.VideoRepository();
const detailVideoUseCase = new DetailVideoUseCase_1.DetailVideoUseCase(videoRepository);
exports.detailVideoUseCase = detailVideoUseCase;
const detailVideoController = new DetailVideoController_1.DetailVideoController(detailVideoUseCase);
exports.detailVideoController = detailVideoController;
