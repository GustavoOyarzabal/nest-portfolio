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
  about: string;
  @IsString()
  @MinLength(1)
  hire: string;
  @IsString()
  @MinLength(1)
  service: string;
  @IsString()
  @MinLength(1)
  formation: string;
  @IsString()
  @MinLength(1)
  experience: string;
  @IsString()
  @MinLength(1)
  formulaire: string;
}
