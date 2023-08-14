import { HttpException, HttpStatus } from '@nestjs/common';

export class OperationException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
