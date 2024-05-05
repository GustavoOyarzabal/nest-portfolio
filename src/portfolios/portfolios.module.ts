import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { PortfolioSchema, Portfolios } from './entities/portfolio.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [PortfoliosController],
  providers: [PortfoliosService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Portfolios.name,
        schema: PortfolioSchema,
      },
    ]),
  ],
})
export class PortfoliosModule {}
