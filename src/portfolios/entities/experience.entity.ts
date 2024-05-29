import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Experience extends Document {
  @Prop({ unique: true, index: true })
  no: number;

  @Prop({ unique: true, index: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: [String], required: true })
  tags: string[];

  @Prop({ required: true })
  summary: string;

  @Prop({ type: Object, required: true })
  thumbnail: {
    url: string;
    blurData: string;
    metadata: {
      width: number;
      height: number;
    };
  };

  @Prop({ required: true })
  content: string;

  @Prop()
  prevNext?: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);

// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { ThumbnailDto } from '../dto/thumbnail-experience.sto';

// @Schema()
// export class Experience extends Document {
//   @Prop({
//     unique: true,
//     index: true,
//   })
//   no: number;

//   @Prop({
//     unique: true,
//     index: true,
//   })
//   title: string;

//   @Prop({
//     required: true,
//   })
//   date: Date;

//   @Prop({
//     type: [String],
//     required: true,
//   })
//   tags: string[];

//   @Prop({
//     required: true,
//   })
//   summary: string;

//   @Prop({
//     type: Object,
//     required: true,
//   })
//   thumbnail: ThumbnailDto;

//   @Prop({
//     required: true,
//   })
//   content: string;
// }

// export const ExperienceSchema = SchemaFactory.createForClass(Experience);
