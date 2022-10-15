import { User } from "../entities/User";

export interface IAuthenticateRepository {
  verifyLogin(nome: string, email: string): Promise<User | null>;
}
