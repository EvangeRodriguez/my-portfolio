import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/schemas/project.schema';
import { ProjectController } from 'src/controllers/project.controllers';
import { ProjectService } from 'src/services/project.service';

@Module({
  //agregamos el módulo
  imports: [
    //agregamos el módulo de mongoose
    MongooseModule.forFeature([
      //agregamos el feature
      { name: Project.name, schema: ProjectSchema }, //agregamos el schema
    ]),
  ],
  controllers: [ProjectController], //agregamos el controlador
  providers: [ProjectService], //agregamos el servicio
})
export class ProjectModule {}
