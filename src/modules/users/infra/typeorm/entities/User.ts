import { uuid } from 'uuidv4';

class User {
  id: string;

  name: string;

  email: string;

  // age: number;

  // phone: string;

  // avatar: string;

  // created_at: Date;

  // updated_at: Date;

  constructor({ name, email }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
  }
}

export default User;
