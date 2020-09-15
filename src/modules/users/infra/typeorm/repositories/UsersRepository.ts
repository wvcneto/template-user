import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public index(): User[] {
    return this.users;
  }

  public create({ name, email }: ICreateUserDTO): User {
    const user = new User({ name, email });

    this.users.push(user);

    return user;
  }

  public findByEmail(email: string): User | undefined {
    const findUser = this.users.find(user => user.email === email);

    return findUser || undefined;
  }
}

export default UsersRepository;
