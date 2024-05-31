// src/entities/portfolio.entity.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class About extends Document {
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
  description: string;

  @Prop({
    unique: true,
    index: true,
  })
  subDescription: string;

  @Prop({
    unique: true,
    index: true,
  })
  github: string;

  @Prop({
    unique: true,
    index: true,
  })
  gitLab: string;

  @Prop({
    unique: true,
    index: true,
  })
  email: string;

  @Prop({
    unique: true,
    index: true,
  })
  tel: string;
  @Prop({
    unique: true,
    index: true,
  })
  downloadCv: string;
}

export const AboutSchema = SchemaFactory.createForClass(About);

// import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Portfolios extends Document {
//   @Prop({
//     unique: true,
//     index: true,
//   })
//   typeContenu: string;
//   @Prop({
//     unique: true,
//     index: true,
//   })
//   no: number;
// }
// export const PortfolioSchema = SchemaFactory.createForClass(Portfolios);
