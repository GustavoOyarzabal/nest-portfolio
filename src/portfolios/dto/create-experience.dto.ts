import {
  IsString,
  MinLength,
  IsInt,
  IsPositive,
  Min,
  IsArray,
  IsOptional,
} from 'class-validator';
import { CreateWorksDto } from './create-works.dto';
import { Type } from 'class-transformer';

export class CreateExperienceDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  title: string;
  @IsString()
  @MinLength(1)
  subTitle: string;
  @IsOptional()
  @IsArray()
  // @ArrayMinSize(1)
  // @ArrayMaxSize(10)
  // @ValidateNested({ each: true })
  @Type(() => CreateWorksDto)
  works: CreateWorksDto[];
}
