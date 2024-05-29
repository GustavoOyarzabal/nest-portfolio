import {
  IsPositive,
  IsString,
  IsArray,
  IsNotEmpty,
  IsDate,
  IsInt,
  Min,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ThumbnailDto } from './thumbnail-experience.dto';

export class CreateExperienceDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsArray()
  @IsNotEmpty()
  tags: string[];

  @IsString()
  @IsNotEmpty()
  summary: string;

  @ValidateNested()
  @Type(() => ThumbnailDto)
  @IsNotEmpty()
  thumbnail: ThumbnailDto;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsString()
  prevNext?: string;
}

// import {
//   IsPositive,
//   IsString,
//   IsArray,
//   IsNotEmpty,
//   IsDate,
//   IsInt,
//   Min,
//   ValidateNested,
// } from 'class-validator';
// import { Type } from 'class-transformer';
// import { ThumbnailDto } from './thumbnail-experience.sto';

// export class CreateExperienceDto {
//   @IsInt()
//   @IsPositive()
//   @Min(1)
//   no: number;

//   @IsString()
//   @IsNotEmpty()
//   title: string;

//   @IsDate()
//   @IsNotEmpty()
//   date: Date;

//   @IsArray()
//   @IsNotEmpty()
//   tags: string[];

//   @IsString()
//   @IsNotEmpty()
//   summary: string;

//   @ValidateNested()
//   @Type(() => ThumbnailDto)
//   @IsNotEmpty()
//   thumbnail: ThumbnailDto;

//   @IsString()
//   @IsNotEmpty()
//   content: string;
// }
