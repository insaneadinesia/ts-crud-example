import { DatabaseError, ValidationError } from 'sequelize';

export class ErrorHelper {
  handleSequelizeError(error: any): Promise<Error> {
    if (error instanceof ValidationError) {
      throw new Error(
        'Validation failed: ' + error.errors.map((e) => e.message).join(', '),
      );
    } else if (error instanceof DatabaseError) {
      throw new Error(error.original ? error.original.message : error.message);
    } else {
      throw new Error('An unexpected error occurred: ' + error.message);
    }
  }
}
