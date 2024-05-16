import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Presentation extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  skillName: string;

  @Prop({
    unique: true,
    index: true,
  })
  skillLastName: string;

  @Prop({
    unique: true,
    index: true,
  })
  skillHeadline: string;
}

export const PresentationSchema = SchemaFactory.createForClass(Presentation);
// // src/entities/skill.entity.ts
// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Skill extends Document {
//   @Prop()
//   name: string;

//   @Prop()
//   level: string; // You might want to change the type to reflect the level of proficiency, such as 'beginner', 'intermediate', 'advanced', etc.
// }

// export const SkillSchema = SchemaFactory.createForClass(Skill);
