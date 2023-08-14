import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminService } from '../services/admin.service';
import { InvalidCredentialsException } from '../exceptions/inalid-credentials.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
  ) {}

  async validateAdmin(username: string, pass: string): Promise<any> {
    const admin = await this.adminService.findByUsername(username);

    if (admin && (await bcrypt.compare(pass, admin.passwordHash))) {
      const token = await this.generateToken(admin.id);

      console.log('Generated token:', token); // Agregar este console.log

      return token;
    }

    throw new InvalidCredentialsException();
  }

  async generateToken(adminId: number): Promise<string> {
    const roles = ['Admin']; // Asignar el rol "Admin"
    const payload = { sub: adminId, roles };

    console.log('Payload for token:', payload); // Agregar este console.log

    return this.jwtService.sign(payload);
  }
}
