import { IsInt } from 'class-validator';

export class MetadataDto {
  @IsInt()
  width: number;

  @IsInt()
  height: number;
}
