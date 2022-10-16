import { sign } from "jsonwebtoken";
import { IAuthenticateRepository } from "../../repositories/IAuthenticateRepository";
import { IAuthenticateDTO } from "./AuthenticateDTO";
import * as dotenv from "dotenv";

dotenv.config();

const tokenKey =
  process.env.TOKEN_KEY || "13f3b6cb-3f98-4258-93c7-82878099f1d9";
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

    const token = sign({}, tokenKey, {
      subject: userExist.id,
      expiresIn: "36000000s",
    });

    return { token };
  }
}
