import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PortfoliosModule,
    MongooseModule.forRoot('mongodb://localhost:27017/portfolios_portfolio'),
    CommonModule,
  ],
})
export class AppModule {}
