import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateNavDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  nom: string;
  @IsString()
  @MinLength(1)
  avialable: string;
  @IsString()
  @MinLength(1)
  home: string;
  @IsString()
  @MinLength(1)
  about: string;
  @IsString()
  @MinLength(1)
  services: string;
  @IsString()
  @MinLength(1)
  experience: string;
  @IsString()
  @MinLength(1)
  formation: string;
  @IsString()
  @MinLength(1)
  contact: string;
}
