import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<{ user: User }> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or Password Incorrect', 400);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Email or Password Incorrect', 400);
    }

    return { user };
  }
}

export default AuthenticateUserService;
