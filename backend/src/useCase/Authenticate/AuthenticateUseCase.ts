import { sign } from "jsonwebtoken";
import { IAuthenticateRepository } from "../../repositories/IAuthenticateRepository";
import { IAuthenticateDTO } from "./AuthenticateDTO";

export class AuthenticateUseCase {
  constructor(private authenticateRepository: IAuthenticateRepository) {}

  async execute({ name, email }: IAuthenticateDTO) {
    const userExist = await this.authenticateRepository.verifyLogin(
      name,
      email
    );

    if (!userExist) {
      throw new Error("Name or password incorrect");
    }

    const token = sign({}, "13f3b6cb-3f98-4258-93c7-82878099f1d9", {
      subject: userExist.id,
      expiresIn: "36000000s",
    });

    return { token };
  }
}
