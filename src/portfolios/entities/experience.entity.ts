import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema()
export class Experience extends Document {
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
    type: [{ type: Types.ObjectId, ref: 'Works' }],
    default: [],
  })
  works: Types.ObjectId[];
}
// const ExperienceSchema = SchemaFactory.createForClass(Experience);

// ExperienceSchema.virtual('worksData', {
//   ref: 'Works',
//   localField: 'works',
//   foreignField: '_id',
//   justOne: false,
// });

// ExperienceSchema.set('toObject', { virtuals: true });
// ExperienceSchema.set('toJSON', { virtuals: true });

// export default ExperienceSchema;
export const ExperienceSchema = SchemaFactory.createForClass(Experience);
