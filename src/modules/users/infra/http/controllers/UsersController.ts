import { Response, Request } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const usersRepository = new UsersRepository();

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = usersRepository.index();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userExists = usersRepository.findByEmail(email);

    if (userExists) {
      return response.json({ message: 'User already exists.' });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    return response.status(400).json(user);
  }
}
