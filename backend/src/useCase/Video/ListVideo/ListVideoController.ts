import { Request, Response } from "express";
import { ListVideoUseCase } from "./ListVideoUseCase";

export class ListVideoController {
  constructor(private listVideoUseCase: ListVideoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const value = request.query.value as string;
    const pageToken = request.query.pageToken as string;

    try {
      const result = await this.listVideoUseCase.execute({
        value,
        pageToken,
      });

      if (!result)
        return response.status(404).json({ message: "Saerch not found" });
      return response.status(200).send(result);
    } catch (error: any) {
      return response.status(400).json({ message: "Opss something is wrong" });
    }
  }
}
