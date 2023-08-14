import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ type: [String], default: [] }) // Campo para los roles
  roles: string[];
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
