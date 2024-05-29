import { IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetadataDto } from './metadadataDto-formation.dto';

export class ThumbnailDto {
  @IsUrl()
  url: string;

  @IsUrl()
  blurData: string;

  @ValidateNested()
  @Type(() => MetadataDto)
  metadata: MetadataDto;
}
