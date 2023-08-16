import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async getProject(): Promise<Project> {
    const project = await this.projectModel.findOne().exec();
    if (!project) {
      console.log('Project information not found.');
      throw new NotFoundException('Project information not found.');
    }
    return project;
  }

  async createProject(project: Project): Promise<Project> {
    const newProject = new this.projectModel(project);
    console.log('Creating new project:', newProject);
    return newProject.save();
  }

  async editProject(editedInfo: Project): Promise<Project> {
    const project = await this.projectModel.findOne().exec();
    if (!project) {
      console.log('Project information not found.');
      throw new NotFoundException('Project information not found.');
    }

    project.title = editedInfo.title;
    project.summary = editedInfo.summary;
    project.technology = editedInfo.technology;
    project.github = editedInfo.github;
    project.url = editedInfo.url;

    console.log('Editing project:', project);
    return project.save();
  }
}
