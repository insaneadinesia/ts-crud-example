import { injectable } from 'inversify';
import { User } from '../models/user';
import { ErrorHelper } from '../helpers/error_helper';

@injectable()
export class UserRepository {
  private errorHelper: ErrorHelper = new ErrorHelper();

  async getAll(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch (error) {
      throw this.errorHelper.handleSequelizeError(error);
    }
  }

  async getById(id: number): Promise<User | null> {
    try {
      return await User.findByPk(id);
    } catch (error) {
      throw this.errorHelper.handleSequelizeError(error);
    }
  }

  async create(payload: User): Promise<User> {
    try {
      return await User.create(payload);
    } catch (error) {
      throw this.errorHelper.handleSequelizeError(error);
    }
  }

  async update(user: User, payload: Partial<User>): Promise<User> {
    try {
      return await user.update(payload);
    } catch (error) {
      throw this.errorHelper.handleSequelizeError(error);
    }
  }

  async delete(user: User): Promise<void> {
    try {
      return await user.destroy();
    } catch (error) {
      throw this.errorHelper.handleSequelizeError(error);
    }
  }
}
