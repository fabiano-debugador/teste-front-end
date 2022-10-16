import { IDetailVideoRepository } from "../../../repositories/IVideoRepository";
import { IDetailVideoDTO } from "./DetailVideoDTO";

export class DetailVideoUseCase {
  constructor(private videoRepository: IDetailVideoRepository) {}

  async execute({ id }: IDetailVideoDTO) {
    const detail = await this.videoRepository.details(id);

    return { detail };
  }
}
