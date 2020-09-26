import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUsersExists = await this.usersRepository.findByEmail(email);

    if (checkUsersExists) {
      throw new AppError('Email already used.', 400);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
