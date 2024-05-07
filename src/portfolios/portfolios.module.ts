import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { PortfolioSchema, Portfolios } from './entities/portfolio.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PortfoliosController],
  providers: [PortfoliosService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Portfolios.name,
        schema: PortfolioSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class PortfoliosModule {}
