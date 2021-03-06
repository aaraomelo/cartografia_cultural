import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type UserDocument = User & Document;

@Schema({
  writeConcern: {},
  timestamps: true
})
export class User {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'fs.files' || null })
  avatarId: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  gender: string;

  @Prop()
  ageRange: string;

  @Prop()
  education: string;

  @Prop()
  isAdmin: boolean;

  @Prop()
  confirmToken: string;

  @Prop()
  recoverToken: string;

  comparePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);