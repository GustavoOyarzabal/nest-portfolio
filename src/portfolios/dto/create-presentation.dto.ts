import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePresentationDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  skillName: string;
  @IsString()
  @MinLength(1)
  skillLastName: string;
  @IsString()
  @MinLength(1)
  skillHeadline: string;
}
