import express from 'express';
import container from './inversify.config';
import { UserController } from './controllers/user_controller';

const app = express();
app.use(express.json());

const userController = container.get<UserController>(UserController);

// Define routes
app.get('/users', (req, res) => userController.getAll(req, res));
app.get('/users/:id', (req, res) => userController.getById(req, res));
app.post('/users', (req, res) => userController.create(req, res));
app.put('/users/:id', (req, res) => userController.update(req, res));
app.delete('/users/:id', (req, res) => userController.delete(req, res));

export default app;
