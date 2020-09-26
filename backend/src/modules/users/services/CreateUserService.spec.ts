import AppError from '@shared/errors/AppError';

import CreateUserService from '@modules/users/services/CreateUserService';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    const user = await createUser.execute({
      name: 'João das Neves',
      email: 'jneves@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with a email already registred', async () => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    await createUser.execute({
      name: 'João das Neves',
      email: 'jneves@example.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'João das Neves',
        email: 'jneves@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
