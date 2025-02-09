import { injectable } from 'inversify';
import { Request, Response } from 'express';

const HTTP_SUCCESS = 200;
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;
const HTTP_UNPROCESSABLE_ENTITY = 422;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;

@injectable()
export class ApiController {
  respondSuccess(req: Request, res: Response, data: any): void {
    res.status(HTTP_SUCCESS).json({
      message: 'Success',
      data: data,
    });
  }

  respondCreated(req: Request, res: Response): void {
    res.status(HTTP_CREATED).json({
      message: 'Resource Created',
    });
  }

  respondUpdated(req: Request, res: Response): void {
    res.status(HTTP_SUCCESS).json({
      message: 'Resource Updated',
    });
  }

  respondDeleted(req: Request, res: Response): void {
    res.status(HTTP_SUCCESS).json({
      message: 'Resource Deleted',
    });
  }

  respondNotFound(
    req: Request,
    res: Response,
    msg: string = 'Record Not Found',
  ): void {
    res.status(HTTP_NOT_FOUND).json({
      error: 'Not Found',
      message: msg,
    });
  }

  respondInternalServerError(
    req: Request,
    res: Response,
    msg: string = 'Unknown Error',
  ): void {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({
      error: 'Internal Server Error',
      message: msg,
    });
  }

  respondUnprocessableEntity(
    req: Request,
    res: Response,
    msg: string = 'Unprocessable Entity',
  ): void {
    res.status(HTTP_UNPROCESSABLE_ENTITY).json({
      error: 'Unprocessable Entity',
      message: msg,
    });
  }

  respondBadRequest(
    req: Request,
    res: Response,
    msg: string = 'Bad Request',
  ): void {
    res.status(HTTP_BAD_REQUEST).json({
      error: 'Bad Request',
      message: msg,
    });
  }

  respondUnauthorized(
    req: Request,
    res: Response,
    msg: string = 'Missing Authentication',
  ): void {
    res.status(HTTP_UNAUTHORIZED).json({
      error: 'Unauthorized',
      message: msg,
    });
  }
}
