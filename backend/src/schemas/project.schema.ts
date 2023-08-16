import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  github: string;

  @Prop()
  url: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
