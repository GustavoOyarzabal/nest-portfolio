import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  title: string;

  @Prop({
    unique: true,
    index: true,
  })
  subTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  email: string;

  @Prop({
    unique: true,
    index: true,
  })
  subject: string;

  @Prop({
    unique: true,
    index: true,
  })
  message: string;
  @Prop({
    unique: true,
    index: true,
  })
  sendMessage: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
