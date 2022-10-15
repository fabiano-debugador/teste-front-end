export class User {
  public readonly id?: string;
  public login!: string;
  public email!: string;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
