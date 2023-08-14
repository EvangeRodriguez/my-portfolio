import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service'; // Importa tu servicio de autenticación

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles || roles.length === 0) {
      return true; // Permitir acceso si no hay roles definidos en las rutas
    }

    const request = context.switchToHttp().getRequest();

    // Verifica si hay un token en el encabezado antes de acceder a request.headers.authorization
    if (!request.headers.authorization) {
      throw new UnauthorizedException(
        'No estás autorizado para realizar esta acción',
      );
    }

    const token = request.headers.authorization.split(' ')[1]; // Obtén el token del encabezado

    try {
      const decodedToken = this.jwtService.verify(token); // Verifica y decodifica el token
      request.user = decodedToken; // Almacena la información del usuario en el request

      return this.checkRoles(roles, decodedToken.roles); // Llama a la función para verificar los roles
    } catch (error) {
      throw new UnauthorizedException(
        'No tienes permisos para acceder a esta ruta',
      );
    }
  }

  private checkRoles(requiredRoles: string[], userRoles: string[]): boolean {
    // Verifica si el usuario tiene al menos uno de los roles requeridos
    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
