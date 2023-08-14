import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { InvalidCredentialsException } from 'src/exceptions/inalid-credentials.exception';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { username: string; password: string },
  ): Promise<{ access_token: string }> {
    const token = await this.authService.validateAdmin(
      body.username,
      body.password,
    );

    if (!token) {
      throw new InvalidCredentialsException();
    }

    return { access_token: token };
  }
}
