import User from '@modules/users/infra/typeorm/entities/User';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import AppError from '@shared/errors/AppError';

const usersRepository = new UsersRepository();

class CreateUserService {
  public async execute({ name, email }: ICreateUserDTO): Promise<User> {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('User already exists.', 409);
    }

    const user = await usersRepository.create({
      name,
      email,
    });

    return user;
  }
}

export default CreateUserService;
