import { VideoRepository } from "../../../repositories/implementations/VideoRepository";
import { DetailVideoController } from "./DetailVideoController";
import { DetailVideoUseCase } from "./DetailVideoUseCase";

const videoRepository = new VideoRepository();

const detailVideoUseCase = new DetailVideoUseCase(videoRepository);

const detailVideoController = new DetailVideoController(detailVideoUseCase);

export { detailVideoUseCase, detailVideoController };
