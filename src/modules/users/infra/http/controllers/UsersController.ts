import { Response, Request } from 'express';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {}

  public async create(
    request: Request,
    response: Response,
  ): Promise<Response> {}
}

export default controllers;
