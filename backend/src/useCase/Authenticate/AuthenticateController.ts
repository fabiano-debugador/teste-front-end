import { Request, Response } from "express";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

export class AuthenticateController {
  constructor(private authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    try {
      const token = await this.authenticateUseCase.execute({ name, email });

      return response.status(200).send(token);
    } catch (error: any) {
      return response.status(401).json({ message: "User not authozized" });
    }
  }
}
