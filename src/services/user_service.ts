import { inject, injectable } from 'inversify';
import { UserRepository } from '../repositories/user_repository';
import { User } from '../models/user';
import { CreateUpdateUserDTO, UserResponseDTO } from '../dtos/user_dto';
import { UserTransformer } from '../transformers/user_transformer';

import 'reflect-metadata';

@injectable()
export class UserService {
  constructor(
    @inject(UserRepository) private userRepository: UserRepository,
    @inject(UserTransformer) private userTransformer: UserTransformer,
  ) {}

  async getAll(): Promise<UserResponseDTO[]> {
    try {
      const users = await this.userRepository.getAll();
      return this.userTransformer.collection(users);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getById(id: number): Promise<UserResponseDTO> {
    try {
      const user = await this.userRepository.getById(id);
      if (!user) {
        throw new Error('Record Not Found');
      }

      return this.userTransformer.transform(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async create(req: CreateUpdateUserDTO): Promise<UserResponseDTO> {
    try {
      const user = await this.userRepository.create(req as User);
      return this.userTransformer.transform(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async update(id: number, req: CreateUpdateUserDTO): Promise<UserResponseDTO> {
    try {
      let user = await this.userRepository.getById(id);
      if (!user) {
        throw new Error('Record Not Found');
      }

      user = await this.userRepository.update(user, req as User);
      return this.userTransformer.transform(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async deleteById(id: number): Promise<void> {
    try {
      const user = await this.userRepository.getById(id);
      if (!user) {
        throw new Error('Record Not Found');
      }

      await this.userRepository.delete(user);
      return;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
