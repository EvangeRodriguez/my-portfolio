import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/schemas/project.schema';
import { ProjectController } from 'src/controllers/project.controllers';
import { ProjectService } from 'src/services/project.service';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from './admin.module';
import { AuthService } from 'src/services/auth.service';
import { RolesGuard } from 'src/guards/roles.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    AdminModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService, AuthService, RolesGuard],
})

export class ProjectModule {}
