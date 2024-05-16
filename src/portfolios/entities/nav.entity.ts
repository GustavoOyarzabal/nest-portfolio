import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Nav extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  nom: string;

  @Prop({
    unique: true,
    index: true,
  })
  avialable: string;

  @Prop({
    unique: true,
    index: true,
  })
  home: string;

  @Prop({
    unique: true,
    index: true,
  })
  about: string;

  @Prop({
    unique: true,
    index: true,
  })
  services: string;

  @Prop({
    unique: true,
    index: true,
  })
  experience: string;

  @Prop({
    unique: true,
    index: true,
  })
  formation: string;

  @Prop({
    unique: true,
    index: true,
  })
  contact: string;
}

export const NavSchema = SchemaFactory.createForClass(Nav);
