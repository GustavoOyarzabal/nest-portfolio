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
  about: string;

  @Prop({
    unique: true,
    index: true,
  })
  hire: string;

  @Prop({
    unique: true,
    index: true,
  })
  service: string;

  @Prop({
    unique: true,
    index: true,
  })
  formation: string;

  @Prop({
    unique: true,
    index: true,
  })
  experience: string;

  @Prop({
    unique: true,
    index: true,
  })
  formulaire: string;
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
