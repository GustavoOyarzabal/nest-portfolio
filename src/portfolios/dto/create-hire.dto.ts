import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateHireDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  goToWork: string;
  @IsString()
  @MinLength(1)
  available: string;
  @IsString()
  @MinLength(1)
  hireMe: string;
}
