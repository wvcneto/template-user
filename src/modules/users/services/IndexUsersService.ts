import User from '@modules/users/infra/typeorm/entities/User';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const usersRepository = new UsersRepository();

class IndexUsersService {
  public async execute(): Promise<User[]> {
    const users = await usersRepository.index();

    return users;
  }
}

export default IndexUsersService;
