import { Request, Response } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const updateUserAvatar = new UpdateUserAvatarService(usersRepository);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.status(200).json(user);
  }
}

export default UserAvatarController;
