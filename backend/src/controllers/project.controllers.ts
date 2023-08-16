import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorator/roles.decorator';
import { OperationException } from 'src/exceptions/bad-request.exception';
import { RolesGuard } from 'src/guards/roles.guard';
import { ProjectService } from 'src/services/project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  //para traer la info
  @Get()
  getProfileInfo() {
    return this.projectService.getProject();
  }

  //para crear la info
  @UseGuards(RolesGuard)
  @Roles('Admin')
  @Post()
  createProject(@Body() project) {
    try {
      return this.projectService.createProject(project);
    } catch (error) {
      throw new OperationException('No se pudo crear el proyecto');
    }
  }

  //para editar la info
  @UseGuards(RolesGuard)
  @Roles('Admin')
  @Patch()
  editProfileInfo(@Body() editedInfo) {
    try {
      return this.projectService.editProject(editedInfo);
    } catch (error) {
      throw new OperationException('No se pudo editar el proyecto');
    }
  }
}
