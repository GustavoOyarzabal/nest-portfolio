import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/Paginationdto';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { PortfoliosService } from './portfolios.service';
import { CreatePresentationDto } from './dto/create-presentation.dto';
import { UpdatePresentationDto } from './dto/update-presentation.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { UpdateNavDto } from './dto/update-nav.dto';
import { CreateNavDto } from './dto/create-nav.dto';
import { CreateHireDto } from './dto/create-hire.dto';
import { UpdateHireDto } from './dto/update-hire.dto';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateWorksDto } from './dto/update-works.dto';
import { CreateWorksDto } from './dto/create-works.dto';
import { ParseMongoIdpipe } from 'src/common/pipes/parse-mongo-idpipe/parse-mongo-idpipe.pipe';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  //*********about******************
  //*********about******************
  //*********about******************

  @Post('about')
  @HttpCode(HttpStatus.CREATED)
  createAbout(@Body() createAboutDto: CreateAboutDto) {
    return this.portfoliosService.createAbout(createAboutDto);
  }

  @Get('about')
  async findAllAbout(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllAbout(paginationDto);
  }

  @Get('about/:term')
  findOneAbout(@Param('term') term: string) {
    return this.portfoliosService.findOneAbout(term);
  }

  @Put('about/:term')
  updateAbout(
    @Param('term') term: string,
    @Body() updateAboutDto: UpdateAboutDto,
  ) {
    return this.portfoliosService.updateAbout(term, updateAboutDto);
  }

  @Delete('about/:id')
  removeAbout(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeAbout(id);
  }
  //*********presentation******************
  //*********presentation******************
  //*********presentation******************
  @Post('presentation')
  @HttpCode(HttpStatus.CREATED)
  createPresentation(@Body() createPresentationDto: CreatePresentationDto) {
    return this.portfoliosService.createPresentation(createPresentationDto);
  }

  @Get('presentation')
  async findAllPresentation(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllPresentation(paginationDto);
  }

  @Get('presentation/:term')
  findOnePresentation(@Param('term') term: string) {
    return this.portfoliosService.findOnePresentation(term);
  }

  @Put('presentation/:term')
  updatePresentation(
    @Param('term') term: string,
    @Body() updatePresentationDto: UpdatePresentationDto,
  ) {
    return this.portfoliosService.updatePresentation(
      term,
      updatePresentationDto,
    );
  }

  @Delete('presentation/:id')
  removePresentation(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removePresentation(id);
  }
  //*********service******************
  //*********service******************
  //*********service******************
  @Post('service')
  @HttpCode(HttpStatus.CREATED)
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.portfoliosService.createService(createServiceDto);
  }

  @Get('service')
  async findAllService(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllService(paginationDto);
  }

  @Get('service/:term')
  findOneService(@Param('term') term: string) {
    return this.portfoliosService.findOneService(term);
  }

  @Put('service/:term')
  updateService(
    @Param('term') term: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.portfoliosService.updateService(term, updateServiceDto);
  }

  @Delete('service/:id')
  removeService(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeService(id);
  }
  //*********nav******************
  //*********nav******************
  //*********nav******************
  @Post('nav')
  @HttpCode(HttpStatus.CREATED)
  createNav(@Body() createNavDto: CreateNavDto) {
    return this.portfoliosService.createNav(createNavDto);
  }

  @Get('nav')
  async findAllNav(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllNav(paginationDto);
  }

  @Get('nav/:term')
  findOneNav(@Param('term') term: string) {
    return this.portfoliosService.findOneNav(term);
  }

  @Put('nav/:term')
  updateNav(@Param('term') term: string, @Body() updateNavDto: UpdateNavDto) {
    return this.portfoliosService.updateNav(term, updateNavDto);
  }

  @Delete('nav/:id')
  removeNav(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeNav(id);
  }
  //*********hire******************
  //*********hire******************
  //*********hire******************
  @Post('hire')
  @HttpCode(HttpStatus.CREATED)
  createHire(@Body() createHireDto: CreateHireDto) {
    return this.portfoliosService.createHire(createHireDto);
  }

  @Get('hire')
  async findAllHire(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllHire(paginationDto);
  }

  @Get('hire/:term')
  findOneHire(@Param('term') term: string) {
    return this.portfoliosService.findOneHire(term);
  }

  @Put('hire/:term')
  updateHire(
    @Param('term') term: string,
    @Body() updateHireDto: UpdateHireDto,
  ) {
    return this.portfoliosService.updateHire(term, updateHireDto);
  }

  @Delete('hire/:id')
  removeHire(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeHire(id);
  }

  //*********Formation******************
  //*********Formation******************
  //*********Formation******************
  @Post('formation')
  @HttpCode(HttpStatus.CREATED)
  createFormation(@Body() createFormationDto: CreateFormationDto) {
    return this.portfoliosService.createFormation(createFormationDto);
  }

  @Get('formation')
  async findAllFormation(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllFormation(paginationDto);
  }

  @Get('formation/:term')
  findOneFormation(@Param('term') term: string) {
    return this.portfoliosService.findOneFormation(term);
  }

  @Put('formation/:term')
  updateFormation(
    @Param('term') term: string,
    @Body() updateFormationDto: UpdateFormationDto,
  ) {
    return this.portfoliosService.updateFormation(term, updateFormationDto);
  }

  @Delete('formation/:id')
  removeFormation(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeFormation(id);
  }
  //*********Form******************
  //*********Form******************
  //*********Form******************
  @Post('form')
  @HttpCode(HttpStatus.CREATED)
  createForm(@Body() createFormDto: CreateFormDto) {
    return this.portfoliosService.createForm(createFormDto);
  }

  @Get('form')
  async findAllForm(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllForm(paginationDto);
  }

  @Get('form/:term')
  findOneForm(@Param('term') term: string) {
    return this.portfoliosService.findOneForm(term);
  }

  @Put('form/:term')
  updateForm(
    @Param('term') term: string,
    @Body() updateFormDto: UpdateFormDto,
  ) {
    return this.portfoliosService.updateForm(term, updateFormDto);
  }

  @Delete('form/:id')
  removeForm(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeForm(id);
  }
  //*********Footer******************
  //*********Footer******************
  //*********Footer******************
  @Post('footer')
  @HttpCode(HttpStatus.CREATED)
  createFooter(@Body() createFooterDto: CreateFooterDto) {
    return this.portfoliosService.createFooter(createFooterDto);
  }

  @Get('footer')
  async findAllFooter(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllFooter(paginationDto);
  }

  @Get('footer/:term')
  findOneFooter(@Param('term') term: string) {
    return this.portfoliosService.findOneFooter(term);
  }

  @Put('footer/:term')
  updateFooter(
    @Param('term') term: string,
    @Body() updateFooterDto: UpdateFooterDto,
  ) {
    return this.portfoliosService.updateFooter(term, updateFooterDto);
  }

  @Delete('footer/:id')
  removeFooter(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeFooter(id);
  }
  // //*********experienceETworks******************
  // //*********experienceETworks******************
  // //*********experience    // //*********experienceETworks******************

  @Post('experience')
  @HttpCode(HttpStatus.CREATED)
  createExperience(@Body() createExperienceDto: CreateExperienceDto) {
    return this.portfoliosService.createExperience(createExperienceDto);
  }

  @Get('experience')
  async findAllExperience(@Query() paginationDto: PaginationDto) {
    return this.portfoliosService.findAllExperience(paginationDto);
  }

  @Get('experience/:experienceId/works')
  async findAllWorks(
    @Param('experienceId', ParseMongoIdpipe) experienceId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.portfoliosService.findAllWorks(experienceId, paginationDto);
  }

  @Get('experience/:experienceId/works/:term')
  findOneWorks(
    @Param('experienceId', ParseMongoIdpipe) experienceId: string,
    @Param('term') term: string,
  ) {
    return this.portfoliosService.findOneWorks(term);
  }

  @Post('experience/:experienceId/works')
  @HttpCode(HttpStatus.CREATED)
  createWorks(
    @Param('experienceId', ParseMongoIdpipe) experienceId: string,
    @Body() createWorksDto: CreateWorksDto,
  ) {
    return this.portfoliosService.createWorks(experienceId, createWorksDto);
  }

  @Put('experience/:experienceId/works/:term')
  updateWorks(
    @Param('experienceId', ParseMongoIdpipe) experienceId: string,
    // @Param('term') term: string,
    @Body() updateWorksDto: UpdateWorksDto,
  ) {
    return this.portfoliosService.updateWorks(
      experienceId,
      // term,
      updateWorksDto,
    );
  }

  @Delete('experience/:experienceId/works/:id')
  removeWorks(
    @Param('experienceId', ParseMongoIdpipe) experienceId: string,
    @Param('id', ParseMongoIdpipe) id: string,
  ) {
    return this.portfoliosService.removeWorks(id);
  }
  // //*********Works******************
  // //*********Works******************
  // //*********Works******************
  // @Post('experience/works')
  // @HttpCode(HttpStatus.CREATED)
  // createWorks(@Body() createWorksDto: CreateWorksDto) {
  //   return this.portfoliosService.createWorks(createWorksDto);
  // }

  // @Get('experience/works')
  // async findAllWorks(@Query() paginationDto: PaginationDto) {
  //   return this.portfoliosService.findAllWorks(paginationDto);
  // }

  // @Get('experience/works/:term')
  // findOneWorks(@Param('term') term: string) {
  //   return this.portfoliosService.findOneWorks(term);
  // }

  // @Put('experience/works/:term')
  // updateWorks(
  //   @Param('term') term: string,
  //   @Body() updateWorksDto: UpdateWorksDto,
  // ) {
  //   return this.portfoliosService.updateWorks(term, updateWorksDto);
  // }

  // @Delete('experience/works/:id')
  // removeWorks(@Param('id', ParseMongoIdpipe) id: string) {
  //   return this.portfoliosService.removeWorks(id);
  // }
  // //*********experience******************
  // //*********experience******************
  // //*********experience******************
  // @Post('experience')
  // @HttpCode(HttpStatus.CREATED)
  // createExperience(@Body() createExperienceDto: CreateExperienceDto) {
  //   return this.portfoliosService.createExperience(createExperienceDto);
  // }

  // @Get('experience')
  // async findAllExperience(@Query() paginationDto: PaginationDto) {
  //   return this.portfoliosService.findAllExperience(paginationDto);
  // }

  // @Get('experience/:term')
  // findOneExperience(@Param('term') term: string) {
  //   return this.portfoliosService.findOneExperience(term);
  // }

  // @Put('experience/:term')
  // updateExperience(
  //   @Param('term') term: string,
  //   @Body() updateExperienceDto: UpdateExperienceDto,
  // ) {
  //   return this.portfoliosService.updateExperience(term, updateExperienceDto);
  // }

  // @Delete('experience/:id')
  // removeExperience(@Param('id', ParseMongoIdpipe) id: string) {
  //   return this.portfoliosService.removeExperience(id);
  // }
}

// import { PortfoliosService } from './portfolios.service';
// import { CreatePortfolioDto } from './dto/create-portfolio.dto';
// import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Param,
//   Delete,
//   HttpCode,
//   HttpStatus,
//   Put,
//   Query,
// } from '@nestjs/common';
// import { ParseMongoIdpipe } from 'src/common/pipes/parse-mongo-idpipe/parse-mongo-idpipe.pipe';
// import { PaginationDto } from 'src/common/dto/Paginationdto';

// @Controller('portfolios')
// export class PortfoliosController {
//   constructor(private readonly portfoliosService: PortfoliosService) {}

//   @Post()
//   @HttpCode(HttpStatus.CREATED)
//   create(@Body() createPortfolioDto: CreatePortfolioDto) {
//     return this.portfoliosService.create(createPortfolioDto);
//   }

//   @Get()
//   async findAllPortfolios(@Query() paginationDto: PaginationDto) {
//     // console.log({ paginationDto });
//     return this.portfoliosService.findAllPortfolios(paginationDto);
//   }

//   @Get(':term')
//   findOne(@Param('term') term: string) {
//     return this.portfoliosService.findOne(term);
//   }

//   @Put(':term')
//   update(
//     @Param('term') term: string,
//     @Body() updatePortfolioDto: UpdatePortfolioDto,
//   ) {
//     return this.portfoliosService.update(term, updatePortfolioDto);
//   }

//   @Delete(':id')
//   remove(@Param('id', ParseMongoIdpipe) id: string) {
//     return this.portfoliosService.remove(id);
//   }
// }
