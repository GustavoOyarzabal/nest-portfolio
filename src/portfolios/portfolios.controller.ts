import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ParseMongoIdpipe } from 'src/common/pipes/parse-mongo-idpipe/parse-mongo-idpipe.pipe';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfoliosService.create(createPortfolioDto);
  }

  @Get()
  findAll() {
    return this.portfoliosService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.portfoliosService.findOne(term);
  }

  @Put(':term')
  update(
    @Param('term') term: string,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    return this.portfoliosService.update(term, updatePortfolioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.remove(id);
  }
}
