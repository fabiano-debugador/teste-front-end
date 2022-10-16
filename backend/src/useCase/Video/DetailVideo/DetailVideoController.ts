import { Request, Response } from "express";
import { DetailVideoUseCase } from "./DetailVideoUseCase";

export class DetailVideoController {
  constructor(private detailVideoUseCase: DetailVideoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.query.id as string;

    try {
      const result = await this.detailVideoUseCase.execute({
        id,
      });

      if (!result)
        return response.status(404).json({ message: "Video not found" });
      return response.status(200).send(result);
    } catch (error: any) {
      return response.status(400).json({ message: "Opss something is wrong" });
    }
  }
}
