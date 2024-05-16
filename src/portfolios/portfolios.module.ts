import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { About, AboutSchema } from './entities/about.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {
  Presentation,
  PresentationSchema,
} from './entities/presentation.entity';
import { Service, ServiceSchema } from './entities/services.entity';
import { Nav, NavSchema } from './entities/nav.entity';
import { Hire, HireSchema } from './entities/hire.entity';
import { Experience, ExperienceSchema } from './entities/experience.entity';
import { Formation, FormationSchema } from './entities/formation.entity';
import { Form, FormSchema } from './entities/form.entity';
import { Footer, FooterSchema } from './entities/footer.entity';
import { Works, WorksSchema } from './entities/works.entity';
// import ExperienceSchema from './entities/experience.entity';

@Module({
  controllers: [PortfoliosController],
  providers: [PortfoliosService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: About.name,
        schema: AboutSchema,
      },
      {
        name: Presentation.name,
        schema: PresentationSchema,
      },
      {
        name: Service.name,
        schema: ServiceSchema,
      },
      {
        name: Nav.name,
        schema: NavSchema,
      },
      {
        name: Hire.name,
        schema: HireSchema,
      },
      {
        name: Experience.name,
        schema: ExperienceSchema,
      },
      {
        name: Formation.name,
        schema: FormationSchema,
      },
      {
        name: Form.name,
        schema: FormSchema,
      },
      {
        name: Footer.name,
        schema: FooterSchema,
      },
      {
        name: Works.name,
        schema: WorksSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class PortfoliosModel {}
