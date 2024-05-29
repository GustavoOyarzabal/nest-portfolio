import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { About } from './entities/about.entity';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { Presentation } from './entities/presentation.entity';
import { CreatePresentationDto } from './dto/create-presentation.dto';
import { UpdatePresentationDto } from './dto/update-presentation.dto';
import { Service } from './entities/services.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Nav } from './entities/nav.entity';
import { CreateNavDto } from './dto/create-nav.dto';
import { UpdateNavDto } from './dto/update-nav.dto';
import { Hire } from './entities/hire.entity';
import { CreateHireDto } from './dto/create-hire.dto';
import { UpdateHireDto } from './dto/update-hire.dto';
import { Experience } from './entities/experience.entity';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { CreateFormationDto } from './dto/create-formation.dto';
import { Formation } from './entities/formation.entity';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Form } from './entities/form.entity';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Footer } from './entities/footer.entity';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';
import { Works } from './entities/works.entity';
import { CreateWorksDto } from './dto/create-works.dto';
import { UpdateWorksDto } from './dto/update-works.dto';

@Injectable()
export class PortfoliosService {
  private defaultLimit: number;
  //rellenar con las otras entdades//
  constructor(
    @InjectModel(About.name) private readonly aboutModel: Model<About>,
    @InjectModel(Presentation.name)
    private readonly presentationModel: Model<Presentation>,
    @InjectModel(Service.name)
    private readonly serviceModel: Model<Service>,
    @InjectModel(Nav.name) private readonly navModel: Model<Nav>,
    @InjectModel(Hire.name) private readonly hireModel: Model<Hire>,
    @InjectModel(Experience.name)
    private readonly experienceModel: Model<Experience>,
    @InjectModel(Formation.name)
    private readonly formationModel: Model<Formation>,
    @InjectModel(Form.name)
    private readonly formModel: Model<Form>,
    @InjectModel(Footer.name)
    private readonly footerModel: Model<Form>,
    @InjectModel(Works.name)
    private readonly worksModel: Model<Works>,

    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = configService.get<number>('defaultLimit');
  }
  ////////////////////////////////////////////////
  // ***************about&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createAbout(createAboutDto: CreateAboutDto) {
    try {
      const about = new this.aboutModel(createAboutDto);
      const savedAbout = await about.save();

      return savedAbout;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAbout() {
    return this.aboutModel.findOne().select(`-__v`).exec();
  }

  async findOneAbout(term: string) {
    let abouts: About;
    if (!isNaN(+term)) {
      abouts = await this.aboutModel.findOne({ no: term });
    }
    if (!abouts && isValidObjectId(term)) {
      abouts = await this.aboutModel.findById(term);
    }
    if (!abouts) {
      abouts = await this.aboutModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!abouts)
      throw new NotFoundException(
        `about with id, typeContenu or no ${term} not fund`,
      );
    return abouts;
  }
  async updateAbout(term: string, updateAboutDto: UpdateAboutDto) {
    const about = await this.findOneAbout(term);

    try {
      const updatedAbout = await this.aboutModel.findByIdAndUpdate(
        about._id,
        updateAboutDto,
        { new: true },
      );
      if (!updatedAbout) {
        throw new NotFoundException(`About with id ${term} not found`);
      }
      return { ...about.toJSON(), ...updateAboutDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async removeAbout(id: string) {
    const { deletedCount } = await this.aboutModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`about with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Presentation&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createPresentation(createPresentationDto: CreatePresentationDto) {
    createPresentationDto.skillName = createPresentationDto.skillName;
    createPresentationDto.skillLastName = createPresentationDto.skillLastName;
    createPresentationDto.skillHeadline = createPresentationDto.skillHeadline;
    console.log('DTO después de la normalización:', createPresentationDto);
    try {
      const presentation = new this.presentationModel(createPresentationDto);
      const savedPresentation = await presentation.save();

      return savedPresentation;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findPresentation() {
    return this.presentationModel.findOne().select(`-__v`).exec();
  }

  async findOnePresentation(term: string) {
    let presentations: Presentation;
    if (!isNaN(+term)) {
      presentations = await this.presentationModel.findOne({ no: term });
    }
    if (!presentations && isValidObjectId(term)) {
      presentations = await this.presentationModel.findById(term);
    }
    if (!presentations) {
      presentations = await this.presentationModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!presentations)
      throw new NotFoundException(
        `presentation with id, Contenu or no ${term} not fund`,
      );
    return presentations;
  }
  async updatePresentation(
    term: string,
    updatePresentationDto: UpdatePresentationDto,
  ) {
    const presentation = await this.findOnePresentation(term);

    if (updatePresentationDto.skillName) {
      updatePresentationDto.skillName = updatePresentationDto.skillName;
    }
    if (updatePresentationDto.skillLastName) {
      updatePresentationDto.skillLastName = updatePresentationDto.skillLastName;
    }
    if (updatePresentationDto.skillHeadline) {
      updatePresentationDto.skillHeadline = updatePresentationDto.skillHeadline;
    }
    try {
      const updatedPresentation =
        await this.presentationModel.findByIdAndUpdate(
          presentation._id,
          updatePresentationDto,
          { new: true },
        );
      if (!updatedPresentation) {
        throw new NotFoundException(`About with id ${term} not found`);
      }
      return { ...presentation.toJSON(), ...updatePresentationDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async removePresentation(id: string) {
    const { deletedCount } = await this.presentationModel.deleteOne({
      _id: id,
    });
    if (deletedCount == 0)
      throw new BadRequestException(`Presentation with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************services&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createService(createServiceDto: CreateServiceDto) {
    try {
      const service = new this.serviceModel(createServiceDto);
      const savedService = await service.save();

      return savedService;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findService() {
    return this.serviceModel.findOne().select(`-__v`).exec();
  }

  async findOneService(term: string) {
    let services: Service;
    if (!isNaN(+term)) {
      services = await this.serviceModel.findOne({ no: term });
    }
    if (!services && isValidObjectId(term)) {
      services = await this.serviceModel.findById(term);
    }
    if (!services) {
      services = await this.serviceModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!services)
      throw new NotFoundException(
        `about with id, typeContenu or no ${term} not fund`,
      );
    return services;
  }
  async updateService(term: string, updateServiceDto: UpdateServiceDto) {
    const service = await this.findOneService(term);

    try {
      const updatedService = await this.serviceModel.findByIdAndUpdate(
        service._id,
        updateServiceDto,
        { new: true },
      );
      if (!updatedService) {
        throw new NotFoundException(`service with id ${term} not found`);
      }
      return { ...service.toJSON(), ...updateServiceDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async removeService(id: string) {
    const { deletedCount } = await this.serviceModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`About with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Nav&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createNav(createNavDto: CreateNavDto) {
    try {
      const nav = new this.navModel(createNavDto);
      const savedNav = await nav.save();

      return savedNav;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findNav() {
    return this.navModel.findOne().select(`-__v`).exec();
  }

  async findOneNav(term: string) {
    let navs: Nav;
    if (!isNaN(+term)) {
      navs = await this.navModel.findOne({ no: term });
    }
    if (!navs && isValidObjectId(term)) {
      navs = await this.navModel.findById(term);
    }
    if (!navs) {
      navs = await this.navModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!navs)
      throw new NotFoundException(
        `nav with id, typeContenu or no ${term} not fund`,
      );
    return navs;
  }
  async updateNav(term: string, updateNavDto: UpdateNavDto) {
    const nav = await this.findOneNav(term);

    try {
      const updatedNav = await this.navModel.findByIdAndUpdate(
        nav._id,
        updateNavDto,
        { new: true },
      );
      if (!updatedNav) {
        throw new NotFoundException(`About with id ${term} not found`);
      }
      return { ...nav.toJSON(), ...updateNavDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async removeNav(id: string) {
    const { deletedCount } = await this.navModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`Nav with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Hire&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createHire(createHireDto: CreateHireDto) {
    try {
      const hire = new this.hireModel(createHireDto);
      const savedHire = await hire.save();

      return savedHire;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findHire() {
    return this.hireModel.findOne().select(`-__v`).exec();
  }

  async findOneHire(term: string) {
    let hires: Hire;
    if (!isNaN(+term)) {
      hires = await this.hireModel.findOne({ no: term });
    }
    if (!hires && isValidObjectId(term)) {
      hires = await this.hireModel.findById(term);
    }
    if (!hires) {
      hires = await this.hireModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!hires)
      throw new NotFoundException(
        `hire with id, typeContenu or no ${term} not fund`,
      );
    return hires;
  }
  async updateHire(term: string, updateHireDto: UpdateHireDto) {
    const hire = await this.findOneHire(term);

    try {
      const updatedHire = await this.hireModel.findByIdAndUpdate(
        hire._id,
        updateHireDto,
        { new: true },
      );
      if (!updatedHire) {
        throw new NotFoundException(`hire with id ${term} not found`);
      }
      return { ...hire.toJSON(), ...updateHireDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async removeHire(id: string) {
    const { deletedCount } = await this.hireModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`Hire with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Formation&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createFormation(createFormationDto: CreateFormationDto) {
    try {
      const formations = await this.formationModel.create(createFormationDto);
      console.log(formations);
      const savedformations = await formations.save();
      return savedformations;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAllFormation() {
    return this.formationModel.find().select(`-__v`).exec();
  }

  async findOneFormation(term: string) {
    let formations: Formation;
    if (!isNaN(+term)) {
      formations = await this.formationModel.findOne({ no: term });
    }
    if (!formations && isValidObjectId(term)) {
      formations = await this.formationModel.findById(term);
    }
    if (!formations) {
      formations = await this.formationModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!formations)
      throw new NotFoundException(
        `formation with id, typeContenu or no ${term} not fund`,
      );
    return formations;
  }
  async updateFormation(term: string, updateFormationDto: UpdateFormationDto) {
    const formation = await this.findOneFormation(term);

    try {
      const updatedFormation = await this.formationModel.findByIdAndUpdate(
        formation._id,
        updateFormationDto,
        { new: true },
      );
      if (!updatedFormation) {
        throw new NotFoundException(`formation with id ${term} not found`);
      }
      return { ...formation.toJSON(), ...updateFormationDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async deleteFormation(id: string) {
    const { deletedCount } = await this.formationModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`Formation with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Form&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createForm(createFormDto: CreateFormDto) {
    try {
      const form = new this.formModel(createFormDto);
      const savedForm = await form.save();

      return savedForm;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findForm() {
    return this.formModel.findOne().select(`-__v`).exec();
  }

  async findOneForm(term: string) {
    let forms: Form;
    if (!isNaN(+term)) {
      forms = await this.formModel.findOne({ no: term });
    }
    if (!forms && isValidObjectId(term)) {
      forms = await this.formModel.findById(term);
    }
    if (!forms) {
      forms = await this.formModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!forms)
      throw new NotFoundException(
        `form with id, typeContenu or no ${term} not fund`,
      );
    return forms;
  }
  async updateForm(term: string, updateFormDto: UpdateFormDto) {
    const form = await this.findOneForm(term);

    try {
      const updatedForm = await this.formModel.findByIdAndUpdate(
        form._id,
        updateFormDto,
        { new: true },
      );
      if (!updatedForm) {
        throw new NotFoundException(`form with id ${term} not found`);
      }
      return { ...form.toJSON(), ...updateFormDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async removeForm(id: string) {
    const { deletedCount } = await this.formModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`form with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Footer&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createFooter(createFooterDto: CreateFooterDto) {
    try {
      const footer = new this.footerModel(createFooterDto);
      const footerdAbout = await footer.save();

      return footerdAbout;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findFooter() {
    return this.footerModel.findOne().select(`-__v`).exec();
  }

  async findOneFooter(term: string) {
    let footers: Footer;
    if (!isNaN(+term)) {
      footers = await this.footerModel.findOne({ no: term });
    }
    if (!footers && isValidObjectId(term)) {
      footers = await this.footerModel.findById(term);
    }
    if (!footers) {
      footers = await this.footerModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!footers)
      throw new NotFoundException(
        `footer with id, typeContenu or no ${term} not fund`,
      );
    return footers;
  }
  async updateFooter(term: string, updateFooterDto: UpdateFooterDto) {
    const footer = await this.findOneFooter(term);

    try {
      const updatedFooter = await this.footerModel.findByIdAndUpdate(
        footer._id,
        updateFooterDto,
        { new: true },
      );
      if (!updatedFooter) {
        throw new NotFoundException(`footer with id ${term} not found`);
      }
      return { ...footer.toJSON(), ...updateFooterDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async removeFooter(id: string) {
    const { deletedCount } = await this.footerModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`footer with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Works&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createWorks(createWorksDto: CreateWorksDto) {
    try {
      const works = new this.worksModel(createWorksDto);
      const savedWorks = await works.save();
      return savedWorks;
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async findWorks() {
    return this.worksModel.findOne().select(`-__v`).exec();
  }

  async findOneWorks(term: string) {
    let workss: Works;
    if (!isNaN(+term)) {
      workss = await this.worksModel.findOne({ no: term });
    }
    if (!workss && isValidObjectId(term)) {
      workss = await this.worksModel.findById(term);
    }
    if (!workss) {
      workss = await this.worksModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!workss)
      throw new NotFoundException(
        `work with id, typeContenu or no ${term} not fund`,
      );
    return workss;
  }
  async updateWorks(term: string, updateWorksDto: UpdateWorksDto) {
    const works = await this.findOneWorks(term);

    try {
      const updatedWorks = await this.worksModel.findByIdAndUpdate(
        works._id,
        updateWorksDto,
        { new: true },
      );
      if (!updatedWorks) {
        throw new NotFoundException(`work with id ${term} not found`);
      }
      return { ...works.toJSON(), ...updateWorksDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async removeWorks(id: string) {
    const { deletedCount } = await this.worksModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`work with id "${id}"not found`);
    return;
  }
  // ////////////////////////////////////////////////
  //   // ***************Experience&&&&&&&&&&&&&&&&&&&&&&&&&
  //   ////////////////////////////////////

  async createExperience(createExperienceDto: CreateExperienceDto) {
    try {
      const experience = new this.experienceModel(createExperienceDto);
      console.log(experience);
      const savedExperience = await experience.save();

      return savedExperience;
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async findAllExperience() {
    return this.experienceModel.find().select(`-__v`).exec();
  }

  async findOneExperience(term: string) {
    let experiences: Experience;
    if (!isNaN(+term)) {
      experiences = await this.experienceModel.findOne({ no: term });
    }
    if (!experiences && isValidObjectId(term)) {
      experiences = await this.experienceModel.findById(term);
    }
    if (!experiences) {
      experiences = await this.experienceModel.findOne({
        title: term.toLowerCase().trim(),
      });
    }
    if (!experiences)
      throw new NotFoundException(
        `experience with id, typeContenu or no ${term} not fund`,
      );
    return experiences;
  }

  async updateExperience(
    term: string,
    updateExperienceDto: UpdateExperienceDto,
  ) {
    const experience = await this.findOneExperience(term);

    try {
      const updatedExperience = await this.experienceModel.findByIdAndUpdate(
        experience._id,
        updateExperienceDto,
        { new: true },
      );
      if (!updatedExperience) {
        throw new NotFoundException(`experience with id ${term} not found`);
      }
      return { ...experience.toJSON(), ...updateExperienceDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async deleteExperience(id: string) {
    const { deletedCount } = await this.experienceModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`experience with id "${id}"not found`);
    return;
  }
  //////////////////handleExceptions////////////////
  //////////////////handleExceptions////////////////
  //////////////////handleExceptions////////////////
  //////////////////handleExceptions////////////////

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `entity exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can´t create entity - Check server logs`,
    );
  }
}
// // ///////////////Experience/////////////////////
// async create(createExperienceDto: CreateExperienceDto): Promise<Experience> {
//   const createdExperience = new this.experienceModel(createExperienceDto);
//   return createdExperience.save();
// }

// async findAll(): Promise<Experience[]> {
//   return this.experienceModel.find().exec();
// }

// async findOne(id: string): Promise<Experience> {
//   const experience = await this.experienceModel.findById(id).exec();
//   if (!experience) {
//     throw new NotFoundException(`Experience with ID ${id} not found`);
//   }
//   return experience;
// }

// async update(
//   id: string,
//   updateExperienceDto: UpdateExperienceDto,
// ): Promise<Experience> {
//   const updatedExperience = await this.experienceModel
//     .findByIdAndUpdate(id, updateExperienceDto, { new: true })
//     .exec();
//   if (!updatedExperience) {
//     throw new NotFoundException(`Experience with ID ${id} not found`);
//   }
//   return updatedExperience;
// }

// async delete(id: string): Promise<void> {
//   const result = await this.experienceModel.findByIdAndDelete(id).exec();
//   if (!result) {
//     throw new NotFoundException(`Experience with ID ${id} not found`);
//   }
// }
