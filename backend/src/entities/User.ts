export class User {
  public readonly id?: string;
  public nome!: string;
  public email!: string;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
