import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async index(): Promise<User[]> {
    return this.users;
  }

  public async create({ name, email }: ICreateUserDTO): Promise<User> {
    const user = new User({ name, email });

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser || undefined;
  }
}

export default UsersRepository;
