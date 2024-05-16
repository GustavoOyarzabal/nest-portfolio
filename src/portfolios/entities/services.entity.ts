// src/entities/portfolio.entity.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Service extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  designTrends: string;
  @Prop({
    unique: true,
    index: true,
  })
  pSDDesign: string;

  @Prop({
    unique: true,
    index: true,
  })
  customerSupport: string;

  @Prop({
    unique: true,
    index: true,
  })
  webDevelopment: string;

  @Prop({
    unique: true,
    index: true,
  })
  fullyResponsive: string;

  @Prop({
    unique: true,
    index: true,
  })
  branding: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
