import { injectable } from 'inversify';
import { User } from '../models/user';

@injectable()
export class UserRepository {
  async getAll(): Promise<User[]> {
    return User.findAll();
  }

  async getById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async create(user: User): Promise<User> {
    return User.create(user);
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    const existingUser = await User.findByPk(id);
    if (!existingUser) return null;

    return existingUser.update(user);
  }

  async deleteById(id: number): Promise<void> {
    await User.destroy({ where: { id } });
  }
}
