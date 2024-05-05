import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdpipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log({ value, metadata });
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value}is not a valid MongoId`);
    }
    return value.toUpperCase();
  }
}
