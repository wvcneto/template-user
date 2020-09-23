import { Response, Request } from 'express';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.findAllUsers();

    return response.status(200).json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { name, email, password } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.status(200).json(user);
  }
}
