import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileInfo, ProfileInfoSchema } from '../schemas/profile.schema';
import { ProfileController } from '../controllers/profile.controller';
import { ProfileService } from '../services/profile.service';
import { RolesGuard } from '../guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service';
import { AdminModule } from './admin.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProfileInfo.name, schema: ProfileInfoSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    AdminModule, // Si es necesario debido a la dependencia
  ],
  controllers: [ProfileController],
  providers: [ProfileService, AuthService, RolesGuard],
})
export class ProfileModule {}
