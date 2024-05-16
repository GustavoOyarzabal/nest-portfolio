import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Footer extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  imageAdress: string;

  @Prop({
    unique: true,
    index: true,
  })
  adrese: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageTel: string;
  @Prop({
    unique: true,
    index: true,
  })
  numeroTel: string;

  @Prop({
    unique: true,
    index: true,
  })
  imageEmail: string;

  @Prop({
    unique: true,
    index: true,
  })
  email: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageOne: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageTwo: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageThree: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageFor: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageFive: string;
  @Prop({
    unique: true,
    index: true,
  })
  imageSixt: string;
  @Prop({
    unique: true,
    index: true,
  })
  developedBy: string;
}

export const FooterSchema = SchemaFactory.createForClass(Footer);
