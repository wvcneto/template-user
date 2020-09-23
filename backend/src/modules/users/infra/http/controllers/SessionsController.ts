import { Request, Response } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService(usersRepository);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(200).json({ user, token });
  }
}
