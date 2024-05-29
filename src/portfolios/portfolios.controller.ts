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
import { UpdateExperienceDto } from './dto/update-experience.dto';

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
  async findAbout() {
    return this.portfoliosService.findAbout();
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
  async findPresentation() {
    return this.portfoliosService.findPresentation();
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
  async findService() {
    return this.portfoliosService.findService();
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
  async findNav() {
    return this.portfoliosService.findNav();
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
  async findHire() {
    return this.portfoliosService.findHire();
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
  findAllFormation() {
    return this.portfoliosService.findAllFormation();
  }

  @Get('formation/:term')
  findOneFormation(@Param('id') id: string) {
    return this.portfoliosService.findOneFormation(id);
  }

  @Put('formation/:term')
  updateFormation(
    @Param('term') term: string,
    @Body() updateFormationDto: UpdateFormationDto,
  ) {
    return this.portfoliosService.updateFormation(term, updateFormationDto);
  }

  @Delete('formation/:id')
  deleteFormation(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.deleteFormation(id);
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
  async findForm() {
    return this.portfoliosService.findForm();
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
  async findAllFooter() {
    return this.portfoliosService.findFooter();
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
  //*********experience******************
  //*********experience******************

  @Post('experience')
  @HttpCode(HttpStatus.CREATED)
  createExperience(@Body() createExperienceDto: CreateExperienceDto) {
    return this.portfoliosService.createExperience(createExperienceDto);
  }
  @Get('experience')
  findAllExperience() {
    return this.portfoliosService.findAllExperience();
  }

  @Get('experience/:term')
  findOneExperience(@Param('id') id: string) {
    return this.portfoliosService.findOneExperience(id);
  }

  @Put('experience/:term')
  updateExperience(
    @Param('term') term: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ) {
    return this.portfoliosService.updateExperience(term, updateExperienceDto);
  }

  @Delete('experience/:id')
  deleteExperience(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.deleteExperience(id);
  }
  //*********works******************
  //*********works******************
  //*********works******************

  @Post('works')
  @HttpCode(HttpStatus.CREATED)
  createWorks(@Body() createWorksDto: CreateWorksDto) {
    return this.portfoliosService.createWorks(createWorksDto);
  }

  @Get('works')
  async findWorks() {
    return this.portfoliosService.findWorks();
  }

  @Get('works/:term')
  findOneWorks(@Param('term') term: string) {
    return this.portfoliosService.findOneWorks(term);
  }

  @Put('works/:term')
  updateWorks(
    @Param('term') term: string,
    @Body() updateWorksDto: UpdateWorksDto,
  ) {
    return this.portfoliosService.updateWorks(term, updateWorksDto);
  }

  @Delete('works/:id')
  removeWorks(@Param('id', ParseMongoIdpipe) id: string) {
    return this.portfoliosService.removeWorks(id);
  }
}
// // //*********experience******************
// @Post('experience')
// @HttpCode(HttpStatus.CREATED)
// create(
//   @Body() createExperienceDto: CreateExperienceDto,
// ): Promise<Experience> {
//   return this.portfoliosService.create(createExperienceDto);
// }

// @Get('experience')
// findAll(): Promise<Experience[]> {
//   return this.portfoliosService.findAll();
// }

// @Get('experience:id')
// findOne(@Param('id') id: string): Promise<Experience> {
//   return this.portfoliosService.findOne(id);
// }

// @Put('experience:id')
// update(
//   @Param('id') id: string,
//   @Body() updateExperienceDto: UpdateExperienceDto,
// ): Promise<Experience> {
//   return this.portfoliosService.update(id, updateExperienceDto);
// }

// @Delete('experience:id')
// delete(@Param('id') id: string): Promise<void> {
//   return this.portfoliosService.delete(id);
// }
