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
  designTrendsImage: string;
  @Prop({
    unique: true,
    index: true,
  })
  designTrendsTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  designTrendsSubTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  pSDDesignImage: string;
  @Prop({
    unique: true,
    index: true,
  })
  pSDDesignTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  pSDDesignSubTitle: string;

  @Prop({
    unique: true,
    index: true,
  })
  customerSupportImage: string;
  @Prop({
    unique: true,
    index: true,
  })
  customerSupportTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  customerSupportSubTitle: string;

  @Prop({
    unique: true,
    index: true,
  })
  webDevelopmentImage: string;
  @Prop({
    unique: true,
    index: true,
  })
  webDevelopmentTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  webDevelopmentSubTitle: string;

  @Prop({
    unique: true,
    index: true,
  })
  fullyResponsiveImage: string;
  @Prop({
    unique: true,
    index: true,
  })
  fullyResponsiveTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  fullyResponsiveSubTitle: string;

  @Prop({
    unique: true,
    index: true,
  })
  brandingImage: string;
  @Prop({
    unique: true,
    index: true,
  })
  brandingTitle: string;
  @Prop({
    unique: true,
    index: true,
  })
  brandingSubTitle: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
