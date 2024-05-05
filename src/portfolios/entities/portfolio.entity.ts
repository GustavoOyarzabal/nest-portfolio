import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Portfolios extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  typeContenu: string;
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}
export const PortfolioSchema = SchemaFactory.createForClass(Portfolios);
