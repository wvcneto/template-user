import { Response, Request } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import IndexUsersService from '@modules/users/services/IndexUsersService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const indexUsers = new IndexUsersService();

    const users = indexUsers.execute();

    return response.status(200).json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
    });

    return response.status(400).json(user);
  }
}
