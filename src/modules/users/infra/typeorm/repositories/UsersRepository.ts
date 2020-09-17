import { getRepository, Repository, EntityRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
// import IFindAllUsersDTO from '@modules/users/dtos/IFindAllUsersDTO';
import User from '../entities/User';

@EntityRepository(User)
class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({ name, email }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, email });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(id);

    return findUser || undefined;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser || undefined;
  }

  public async findAllUsers(): Promise<User[]> {
    /*
      let users: User[];

      if (except_user_id) {
        users = await this.ormRepository.find({
          where: {
            id: Not(except_user_id),
          },
        });
      } else {
        users = await this.ormRepository.find();
      }
    */

    const users = await this.ormRepository.find();

    return users;
  }
}

export default UsersRepository;
