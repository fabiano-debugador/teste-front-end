import { IListVideoRepository } from "../../../repositories/IVideoRepository";
import { IListVideoDTO } from "./ListVideoDTO";

export class ListVideoUseCase {
  constructor(private videoRepository: IListVideoRepository) {}

  async execute({ value, pageToken }: IListVideoDTO) {
    const listOfVideos = await this.videoRepository.searchVideos(
      value,
      pageToken
    );

    return { listOfVideos };
  }
}
