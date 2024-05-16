import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateFooterDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  imageAdress: string;
  @IsString()
  @MinLength(1)
  adrese: string;
  @IsString()
  @MinLength(1)
  imageTel: string;
  @IsString()
  @MinLength(1)
  numeroTel: string;
  @IsString()
  @MinLength(1)
  imageEmail: string;
  @IsString()
  @MinLength(1)
  email: string;
  @IsString()
  @MinLength(1)
  imageOne: string;
  @IsString()
  @MinLength(1)
  imageTwo: string;
  @IsString()
  @MinLength(1)
  imageThree: string;
  @IsString()
  @MinLength(1)
  imageFor: string;
  @IsString()
  @MinLength(1)
  imageFive: string;
  @IsString()
  @MinLength(1)
  imageSixt: string;
  @IsString()
  @MinLength(1)
  developedBy: string;
}
