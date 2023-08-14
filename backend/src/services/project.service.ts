import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) projectModel: Model<Project>) {}

  async getProject(): Promise<Project> {
    const project = await this.projectModel.findOne().exec();
    if (!project) {
      throw new NotFoundException('Información del proyecto no existe.');
    }
    return project;
  }

  async createProject(project: Project): Promise<Project> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  async editProject(editedInfo: Project): Promise<Project> {
    const project = await this.projectModel.findOne().exec();
    project.title = editedInfo.title;
    project.summary = editedInfo.summary;
    project.language = editedInfo.language;
    project.github = editedInfo.github;
    project.url = editedInfo.url;
    return project.save();
  }
}