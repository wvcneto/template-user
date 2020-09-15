import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);

usersRouter.get('/', usersController.index);

export default usersRouter;
