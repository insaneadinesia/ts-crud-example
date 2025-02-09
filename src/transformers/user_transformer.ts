import { injectable } from 'inversify';
import { User } from '../models/user';
import { UserResponseDTO } from '../dtos/user_dto';

@injectable()
export class UserTransformer {
  transform(user: User): UserResponseDTO {
    const resp: UserResponseDTO = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return resp;
  }

  collection(users: User[]): UserResponseDTO[] {
    const resp: UserResponseDTO[] = [];

    users.forEach(async (user) => {
      resp.push(user);
    });

    return resp;
  }
}
