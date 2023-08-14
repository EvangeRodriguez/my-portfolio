import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() // Decorador para indicar que esta clase es un schema de mongoose
export class ProfileInfo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  contactLinks: Array<{ platform: string; link: string }>;
}

export const ProfileInfoSchema = SchemaFactory.createForClass(ProfileInfo);
