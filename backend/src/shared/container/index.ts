import { container } from 'tsyringe';

import '@modules/users/providers';
import '@shared/container/providers';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
// import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
/*
container.registerSingleton<IUserTokensRepository>(
  'UserTokens',
  UserTokensRepository,
);
*/
