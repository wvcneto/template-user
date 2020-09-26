import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import CreateUserService from '@modules/users/services/CreateUserService';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;
let createUser: CreateUserService;

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    const user = await createUser.execute({
      name: 'Maria das Rosas',
      email: 'mrosas@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'mrosas@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with a non existing user', async () => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    expect(
      authenticateUser.execute({
        email: 'mrosas@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    await createUser.execute({
      name: 'Maria das Rosas',
      email: 'mrosas@example.com',
      password: '123456',
    });

    expect(
      authenticateUser.execute({
        email: 'mrosas@example.com',
        password: 'wrong',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
