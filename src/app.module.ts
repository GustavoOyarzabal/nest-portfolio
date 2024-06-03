import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { PortfoliosModel } from './portfolios/portfolios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration], // conversiones y mapeos
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongodb'),
      }),
      inject: [ConfigService],
    }),
    PortfoliosModel,
    CommonModule,
  ],
})
export class AppModule {
  // constructor() {
  //   // console.log(process.env);
  // }
}

// import { Module } from '@nestjs/common';
// import { join } from 'path';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { MongooseModule } from '@nestjs/mongoose';
// import { CommonModule } from './common/common.module';
// import { ConfigModule } from '@nestjs/config';
// import { EnvConfiguration } from './config/env.config';
// import { JoiValidationSchema } from './config/joi.validation';
// import { PortfoliosModel } from './portfolios/portfolios.module';
// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       load: [EnvConfiguration], //conversiones y mapeos
//       validationSchema: JoiValidationSchema,
//     }),
//     ServeStaticModule.forRoot({
//       rootPath: join(__dirname, '..', 'public'),
//     }),
//     MongooseModule.forRoot('mongodb://localhost:27017/portfolios_portfolio'),
//     PortfoliosModel,

//     CommonModule,
//   ],
// })
// export class AppModule {
//   // constructor() {
//   //   // console.log(process.env);
//   // }
// }
