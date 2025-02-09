import { Container } from 'inversify';
import { UserRepository } from './repositories/user_repository';
import { UserService } from './services/user_service';
import { UserController } from './controllers/user_controller';
import { UserTransformer } from './transformers/user_transformer';
import { ApiController } from './controllers/api_controller';

const container = new Container();

container.bind<UserRepository>(UserRepository).toSelf();
container.bind<UserService>(UserService).toSelf();
container.bind<UserController>(UserController).toSelf();
container.bind<ApiController>(ApiController).toSelf();
container.bind<UserTransformer>(UserTransformer).toSelf();

export default container;
