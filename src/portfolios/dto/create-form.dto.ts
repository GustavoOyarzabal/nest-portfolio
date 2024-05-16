import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateFormDto {
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
  name: string;
  @IsString()
  @MinLength(1)
  email: string;
  @IsString()
  @MinLength(1)
  subject: string;
  @IsString()
  @MinLength(1)
  message: string;
  @IsString()
  @MinLength(1)
  sendMessage: string;
}
