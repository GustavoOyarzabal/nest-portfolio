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
  image: string;

  @Prop()
  date: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  tags: string;
}

export const WorksSchema = SchemaFactory.createForClass(Works);
