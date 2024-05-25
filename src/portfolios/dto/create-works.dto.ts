import { IsString, MinLength, IsInt, IsPositive, Min } from 'class-validator';

export class CreateWorksDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  image: string;
  @IsString()
  @MinLength(1)
  date: string;
  @IsString()
  @MinLength(1)
  title: string;
  @IsString()
  @MinLength(1)
  description: string;
  @IsString()
  @MinLength(1)
  tags: string;
}
