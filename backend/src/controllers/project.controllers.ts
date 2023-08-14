import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { OperationException } from 'src/exceptions/bad-request-exceptions';
import { ProjectService } from 'src/service/project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  //para traer la info
  @Get()
  getProfileInfo() {
    return this.projectService.getProject();
  }
  //para crear la info
  @Post()
  createProject(@Body() project) {
    try {
      return this.projectService.createProject(project);
    } catch (error) {
      throw new OperationException('No se pudo crear el proyecto');
    }
  }
  //para editar la info
  @Patch()
  editProfileInfo(@Body() editedInfo) {
    try {
      return this.projectService.editProject(editedInfo);
    } catch (error) {
      throw new OperationException('No se pudo editar el proyecto');
    }
  }
}
