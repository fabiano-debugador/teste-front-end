import { DatabaseAuthenticateRepository } from "../../repositories/implementations/DatabaseAuthenticateRepository";
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

const postgresAuthenticateRepository = new DatabaseAuthenticateRepository();

const authenticateUseCase = new AuthenticateUseCase(
  postgresAuthenticateRepository
);

const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateUseCase, authenticateController };
