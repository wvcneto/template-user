import { Request, Response } from 'express';

import AuthenticateUserService from 'modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const user = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(200).json(user);
  }
}
