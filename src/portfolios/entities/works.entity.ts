import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Works extends Document {
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
  tag: string;
  @Prop({
    unique: true,
    index: true,
  })
  image: string;

  @Prop({
    unique: true,
    index: true,
  })
  date: string;

  @Prop({
    unique: true,
    index: true,
  })
  description: string;

  @Prop({
    unique: true,
    index: true,
  })
  subdescription: string;

  @Prop({
    unique: true,
    index: true,
  })
  tags: string;
}
export const WorksSchema = SchemaFactory.createForClass(Works);
