import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateServiceDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  designTrends: string;
  @IsString()
  @MinLength(1)
  pSDDesign: string;
  @IsString()
  @MinLength(1)
  customerSupport: string;
  @IsString()
  @MinLength(1)
  webDevelopment: string;
  @IsString()
  @MinLength(1)
  fullyResponsive: string;
  @IsString()
  @MinLength(1)
  branding: string;
}
