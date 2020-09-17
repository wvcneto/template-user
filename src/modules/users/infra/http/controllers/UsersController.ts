import { Response, Request } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

const usersRepository = new UsersRepository();

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await usersRepository.index();

    return response.status(200).json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
    });

    return response.status(200).json(user);
  }
}
