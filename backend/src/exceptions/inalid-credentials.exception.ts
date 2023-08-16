import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
  }
}
