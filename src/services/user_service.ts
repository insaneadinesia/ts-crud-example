import { inject, injectable } from 'inversify';
import { UserRepository } from '../repositories/user_repository';
import { User } from '../models/user';
import 'reflect-metadata';

@injectable()
export class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async getById(id: number): Promise<User | null> {
    return this.userRepository.getById(id);
  }

  async create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  async deleteById(id: number): Promise<void> {
    return this.userRepository.deleteById(id);
  }
}
