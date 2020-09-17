import { getCustomRepository } from 'typeorm';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserService {
  public async execute({ name, email }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const checkUsersExists = await usersRepository.findByEmail(email);

    if (checkUsersExists) {
      throw new AppError('Email already used.');
    }

    const user = await usersRepository.create({
      name,
      email,
    });

    return user;
  }
}

export default CreateUserService;
