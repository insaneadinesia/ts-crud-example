import { inject } from 'inversify';
import { Request, Response } from 'express';
import { UserService } from '../services/user_service';

export class UserController {
  constructor(@inject(UserService) private userService: UserService) {}

  async getAll(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAll();
    res.json(users);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const user = await this.userService.getById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = await this.userService.create(req.body);
    res.status(201).json(user);
  }

  async update(req: Request, res: Response): Promise<void> {
    const user = await this.userService.update(Number(req.params.id), req.body);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    await this.userService.deleteById(Number(req.params.id));
    res.status(204).send();
  }
}
