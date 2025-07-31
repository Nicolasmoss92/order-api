import { ConflictException } from '@nestjs/common';

export class ExistsException extends ConflictException {
  constructor() {
    super(`already exists.`);
  }
}
