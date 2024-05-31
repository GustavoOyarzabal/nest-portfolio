import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateAboutDto {
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
  @IsString()
  @MinLength(1)
  description: string;
  @IsString()
  @MinLength(1)
  subDescription: string;
  @IsString()
  @MinLength(1)
  github: string;
  @IsString()
  @MinLength(1)
  gitLab: string;
  @IsString()
  @MinLength(1)
  email: string;
  @IsString()
  @MinLength(1)
  tel: string;
  @IsString()
  @MinLength(1)
  downloadCv: string;
}
