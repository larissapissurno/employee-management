import { Request, Response, NextFunction } from 'express';
import { isUuid } from 'uuidv4';

import AppError from '../errors/AppError';

export default function ensureValidUuid(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { id } = request.params;

  if (!isUuid(id)) {
    throw new AppError('Inform a valid id', 401);
  }

  return next();
}
