import { VideoRepository } from "../../../repositories/implementations/VideoRepository";
import { ListVideoController } from "./ListVideoController";
import { ListVideoUseCase } from "./ListVideoUseCase";

const videoRepository = new VideoRepository();

const listVideoUseCase = new ListVideoUseCase(videoRepository);

const listVideoController = new ListVideoController(listVideoUseCase);

export { listVideoUseCase, listVideoController };
