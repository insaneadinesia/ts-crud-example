import { inject } from 'inversify';
import { Request, Response } from 'express';
import { UserService } from '../services/user_service';
import { ApiController } from './api_controller';

export class UserController {
  constructor(
    @inject(UserService) private userService: UserService,
    @inject(ApiController) private api: ApiController,
  ) {}

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAll();
      return this.api.respondSuccess(req, res, users);
    } catch (error: any) {
      return this.api.respondBadRequest(req, res, error.message);
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.getById(Number(req.params.id));
      return this.api.respondSuccess(req, res, user);
    } catch (error: any) {
      return this.api.respondBadRequest(req, res, error.message);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.create(req.body);
      return this.api.respondCreated(req, res);
    } catch (error: any) {
      return this.api.respondUnprocessableEntity(req, res, error.message);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.update(Number(req.params.id), req.body);
      return this.api.respondUpdated(req, res);
    } catch (error: any) {
      return this.api.respondUnprocessableEntity(req, res, error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.deleteById(Number(req.params.id));
      return this.api.respondDeleted(req, res);
    } catch (error: any) {
      return this.api.respondUnprocessableEntity(req, res, error.message);
    }
  }
}
