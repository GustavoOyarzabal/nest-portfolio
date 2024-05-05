import { CreatePortfolioDto } from './create-portfolio.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePortfolioDto extends PartialType(CreatePortfolioDto) {}
