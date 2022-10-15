import { User } from "../../entities/User";
import { IAuthenticateRepository } from "../IAuthenticateRepository";

export class DatabaseAuthenticateRepository implements IAuthenticateRepository {
  private users: User[] = [
    {
      id: "9324171b-99f3-42bf-80b1-8ebe459a17a7",
      name: "Fabiano",
      email: "fabiano@mail.com",
    },
  ];

  async verifyLogin(name: string, email: string): Promise<User | null> {
    const user = this.users.find(
      (user) => user.email === email && user.name === name
    );

    if (!user) return null;

    return user;
  }
}
