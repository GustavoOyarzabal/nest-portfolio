import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateServiceDto {
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
  designTrendsImage: string;
  @IsString()
  @MinLength(1)
  designTrendsTitle: string;
  @IsString()
  @MinLength(1)
  designTrendsSubTitle: string;
  @IsString()
  @MinLength(1)
  pSDDesignImage: string;
  @IsString()
  @MinLength(1)
  pSDDesignTitle: string;
  @IsString()
  @MinLength(1)
  pSDDesignSubTitle: string;
  @IsString()
  @MinLength(1)
  customerSupportImage: string;
  @IsString()
  @MinLength(1)
  customerSupportTitle: string;
  @IsString()
  @MinLength(1)
  customerSupportSubTitle: string;
  @IsString()
  @MinLength(1)
  webDevelopmentImage: string;
  @IsString()
  @MinLength(1)
  webDevelopmentTitle: string;
  @IsString()
  @MinLength(1)
  webDevelopmentSubTitle: string;
  @IsString()
  @MinLength(1)
  fullyResponsiveImage: string;
  @IsString()
  @MinLength(1)
  fullyResponsiveTitle: string;
  @IsString()
  @MinLength(1)
  fullyResponsiveSubTitle: string;
  @IsString()
  @MinLength(1)
  brandingImage: string;
  @IsString()
  @MinLength(1)
  brandingTitle: string;
  @IsString()
  @MinLength(1)
  brandingSubTitle: string;
}
