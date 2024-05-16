import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Hire extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  goToWork: string;

  @Prop({
    unique: true,
    index: true,
  })
  available: string;

  @Prop({
    unique: true,
    index: true,
  })
  hireMe: string;
}

export const HireSchema = SchemaFactory.createForClass(Hire);
