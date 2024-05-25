import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { PaginationDto } from 'src/common/dto/Paginationdto';
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
    createAboutDto.title = createAboutDto.title.toLocaleLowerCase();
    createAboutDto.subTitle = createAboutDto.subTitle.toLocaleLowerCase();
    createAboutDto.description = createAboutDto.description.toLocaleLowerCase();
    createAboutDto.subDescription =
      createAboutDto.subDescription.toLocaleLowerCase();
    createAboutDto.github = createAboutDto.github.toLocaleLowerCase();
    createAboutDto.email = createAboutDto.email.toLocaleLowerCase();
    createAboutDto.tel = createAboutDto.tel.toLocaleLowerCase();

    createAboutDto.downloadCv = createAboutDto.downloadCv.toLocaleLowerCase();

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

    if (updateAboutDto.title) {
      updateAboutDto.title = updateAboutDto.title.toLowerCase();
    }
    if (updateAboutDto.subTitle) {
      updateAboutDto.subTitle = updateAboutDto.subTitle.toLowerCase();
    }
    if (updateAboutDto.description) {
      updateAboutDto.description = updateAboutDto.description.toLowerCase();
    }
    if (updateAboutDto.subDescription) {
      updateAboutDto.subDescription =
        updateAboutDto.subDescription.toLowerCase();
    }
    if (updateAboutDto.github) {
      updateAboutDto.github = updateAboutDto.github.toLowerCase();
    }
    if (updateAboutDto.email) {
      updateAboutDto.email = updateAboutDto.email.toLowerCase();
    }
    if (updateAboutDto.tel) {
      updateAboutDto.tel = updateAboutDto.tel.toLowerCase();
    }
    if (updateAboutDto.downloadCv) {
      updateAboutDto.downloadCv = updateAboutDto.downloadCv.toLowerCase();
    }

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
      const presentation = new this.aboutModel(createPresentationDto);
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
    createServiceDto.title = createServiceDto.title.toLocaleLowerCase();

    createServiceDto.subTitle = createServiceDto.subTitle.toLocaleLowerCase();

    createServiceDto.designTrendsImage =
      createServiceDto.designTrendsImage.toLocaleLowerCase();

    createServiceDto.designTrendsTitle =
      createServiceDto.designTrendsTitle.toLocaleLowerCase();

    createServiceDto.designTrendsSubTitle =
      createServiceDto.designTrendsSubTitle.toLocaleLowerCase();

    createServiceDto.pSDDesignImage =
      createServiceDto.pSDDesignImage.toLocaleLowerCase();

    createServiceDto.pSDDesignTitle =
      createServiceDto.pSDDesignTitle.toLocaleLowerCase();

    createServiceDto.pSDDesignSubTitle =
      createServiceDto.pSDDesignSubTitle.toLocaleLowerCase();

    createServiceDto.customerSupportImage =
      createServiceDto.customerSupportImage.toLocaleLowerCase();

    createServiceDto.customerSupportTitle =
      createServiceDto.customerSupportTitle.toLocaleLowerCase();

    createServiceDto.customerSupportSubTitle =
      createServiceDto.customerSupportSubTitle.toLocaleLowerCase();

    createServiceDto.webDevelopmentImage =
      createServiceDto.webDevelopmentImage.toLocaleLowerCase();

    createServiceDto.webDevelopmentTitle =
      createServiceDto.webDevelopmentTitle.toLocaleLowerCase();

    createServiceDto.webDevelopmentSubTitle =
      createServiceDto.webDevelopmentSubTitle.toLocaleLowerCase();

    createServiceDto.fullyResponsiveImage =
      createServiceDto.fullyResponsiveImage.toLocaleLowerCase();

    createServiceDto.fullyResponsiveTitle =
      createServiceDto.fullyResponsiveTitle.toLocaleLowerCase();

    createServiceDto.fullyResponsiveSubTitle =
      createServiceDto.fullyResponsiveSubTitle.toLocaleLowerCase();

    createServiceDto.brandingImage =
      createServiceDto.brandingImage.toLocaleLowerCase();

    createServiceDto.brandingTitle =
      createServiceDto.brandingTitle.toLocaleLowerCase();

    createServiceDto.brandingSubTitle =
      createServiceDto.brandingSubTitle.toLocaleLowerCase();
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

    if (updateServiceDto.title) {
      updateServiceDto.title = updateServiceDto.title.toLowerCase();
    }
    if (updateServiceDto.subTitle) {
      updateServiceDto.subTitle = updateServiceDto.subTitle.toLowerCase();
    }
    if (updateServiceDto.designTrendsImage) {
      updateServiceDto.designTrendsImage =
        updateServiceDto.designTrendsImage.toLowerCase();
    }
    if (updateServiceDto.designTrendsTitle) {
      updateServiceDto.designTrendsTitle =
        updateServiceDto.designTrendsTitle.toLowerCase();
    }
    if (updateServiceDto.designTrendsSubTitle) {
      updateServiceDto.designTrendsSubTitle =
        updateServiceDto.designTrendsSubTitle.toLowerCase();
    }
    if (updateServiceDto.pSDDesignImage) {
      updateServiceDto.pSDDesignImage =
        updateServiceDto.pSDDesignImage.toLowerCase();
    }
    if (updateServiceDto.pSDDesignTitle) {
      updateServiceDto.pSDDesignTitle =
        updateServiceDto.pSDDesignTitle.toLowerCase();
    }
    if (updateServiceDto.pSDDesignSubTitle) {
      updateServiceDto.pSDDesignSubTitle =
        updateServiceDto.pSDDesignSubTitle.toLowerCase();
    }
    if (updateServiceDto.customerSupportImage) {
      updateServiceDto.customerSupportImage =
        updateServiceDto.customerSupportImage.toLowerCase();
    }
    if (updateServiceDto.customerSupportTitle) {
      updateServiceDto.customerSupportTitle =
        updateServiceDto.customerSupportTitle.toLowerCase();
    }
    if (updateServiceDto.customerSupportSubTitle) {
      updateServiceDto.customerSupportSubTitle =
        updateServiceDto.customerSupportSubTitle.toLowerCase();
    }
    if (updateServiceDto.webDevelopmentImage) {
      updateServiceDto.webDevelopmentImage =
        updateServiceDto.webDevelopmentImage.toLowerCase();
    }
    if (updateServiceDto.webDevelopmentTitle) {
      updateServiceDto.webDevelopmentTitle =
        updateServiceDto.webDevelopmentTitle.toLowerCase();
    }
    if (updateServiceDto.webDevelopmentSubTitle) {
      updateServiceDto.webDevelopmentSubTitle =
        updateServiceDto.webDevelopmentSubTitle.toLowerCase();
    }
    if (updateServiceDto.fullyResponsiveImage) {
      updateServiceDto.fullyResponsiveImage =
        updateServiceDto.fullyResponsiveImage.toLowerCase();
    }
    if (updateServiceDto.fullyResponsiveTitle) {
      updateServiceDto.fullyResponsiveTitle =
        updateServiceDto.fullyResponsiveTitle.toLowerCase();
    }
    if (updateServiceDto.fullyResponsiveSubTitle) {
      updateServiceDto.fullyResponsiveSubTitle =
        updateServiceDto.fullyResponsiveSubTitle.toLowerCase();
    }
    if (updateServiceDto.brandingImage) {
      updateServiceDto.brandingImage =
        updateServiceDto.brandingImage.toLowerCase();
    }
    if (updateServiceDto.brandingTitle) {
      updateServiceDto.brandingTitle =
        updateServiceDto.brandingTitle.toLowerCase();
    }
    if (updateServiceDto.brandingSubTitle) {
      updateServiceDto.brandingSubTitle =
        updateServiceDto.brandingSubTitle.toLowerCase();
    }

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
    createNavDto.nom = createNavDto.nom.toLocaleLowerCase();
    createNavDto.avialable = createNavDto.avialable.toLocaleLowerCase();
    createNavDto.home = createNavDto.home.toLocaleLowerCase();
    createNavDto.about = createNavDto.about.toLocaleLowerCase();
    createNavDto.services = createNavDto.services.toLocaleLowerCase();
    createNavDto.experience = createNavDto.experience.toLocaleLowerCase();
    createNavDto.formation = createNavDto.formation.toLocaleLowerCase();
    createNavDto.contact = createNavDto.contact.toLocaleLowerCase();
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

    if (updateNavDto.nom) {
      updateNavDto.nom = updateNavDto.nom.toLowerCase();
    }
    if (updateNavDto.avialable) {
      updateNavDto.avialable = updateNavDto.avialable.toLowerCase();
    }
    if (updateNavDto.home) {
      updateNavDto.home = updateNavDto.home.toLowerCase();
    }
    if (updateNavDto.about) {
      updateNavDto.about = updateNavDto.about.toLowerCase();
    }
    if (updateNavDto.services) {
      updateNavDto.services = updateNavDto.services.toLowerCase();
    }
    if (updateNavDto.experience) {
      updateNavDto.experience = updateNavDto.experience.toLowerCase();
    }
    if (updateNavDto.formation) {
      updateNavDto.formation = updateNavDto.formation.toLowerCase();
    }
    if (updateNavDto.contact) {
      updateNavDto.contact = updateNavDto.contact.toLowerCase();
    }
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
    createHireDto.goToWork = createHireDto.goToWork.toLocaleLowerCase();
    createHireDto.available = createHireDto.available.toLocaleLowerCase();
    createHireDto.hireMe = createHireDto.hireMe.toLocaleLowerCase();
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

    if (updateHireDto.goToWork) {
      updateHireDto.goToWork = updateHireDto.goToWork.toLowerCase();
    }
    if (updateHireDto.available) {
      updateHireDto.available = updateHireDto.available.toLowerCase();
    }
    if (updateHireDto.hireMe) {
      updateHireDto.hireMe = updateHireDto.hireMe.toLowerCase();
    }
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
    createFormationDto.title = createFormationDto.title.toLocaleLowerCase();
    createFormationDto.prevNext =
      createFormationDto.prevNext.toLocaleLowerCase();
    createFormationDto.tag = createFormationDto.tag.toLocaleLowerCase();
    createFormationDto.image = createFormationDto.image.toLocaleLowerCase();
    createFormationDto.date = createFormationDto.date.toLocaleLowerCase();
    createFormationDto.description =
      createFormationDto.description.toLocaleLowerCase();
    createFormationDto.subdescription =
      createFormationDto.subdescription.toLocaleLowerCase();
    createFormationDto.tags = createFormationDto.tags.toLocaleLowerCase();
    try {
      const formations = await this.formationModel.create(createFormationDto);
      return formations;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAllFormation(paginationDto: PaginationDto) {
    const { limit = this.defaultLimit, offset = 0 } = paginationDto;

    return this.formationModel
      .find()
      .limit(limit)
      .skip(offset)
      .sort({ no: 1 })
      .select(`-__v`)
      .exec();
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

    if ((updateFormationDto.title = updateFormationDto.title)) {
      updateFormationDto.title = updateFormationDto.title.toLowerCase();
    }
    if ((updateFormationDto.prevNext = updateFormationDto.prevNext)) {
      updateFormationDto.prevNext = updateFormationDto.prevNext.toLowerCase();
    }
    if ((updateFormationDto.tag = updateFormationDto.tag)) {
      updateFormationDto.tag = updateFormationDto.tag.toLowerCase();
    }
    if ((updateFormationDto.image = updateFormationDto.image)) {
      updateFormationDto.image = updateFormationDto.image.toLowerCase();
    }
    if ((updateFormationDto.date = updateFormationDto.date)) {
      updateFormationDto.date = updateFormationDto.date.toLowerCase();
    }
    if ((updateFormationDto.description = updateFormationDto.description)) {
      updateFormationDto.description =
        updateFormationDto.description.toLowerCase();
    }
    if (
      (updateFormationDto.subdescription = updateFormationDto.subdescription)
    ) {
      updateFormationDto.subdescription =
        updateFormationDto.subdescription.toLowerCase();
    }
    if ((updateFormationDto.tags = updateFormationDto.tags)) {
      updateFormationDto.tags = updateFormationDto.tags.toLowerCase();
    }
    try {
      await formation.updateOne(updateFormationDto);

      return { ...formation.toJSON(), ...updateFormationDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async removeFormation(id: string) {
    const { deletedCount } = await this.formationModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`formation with id "${id}"not found`);
    return;
  }
  ////////////////////////////////////////////////
  // ***************Form&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createForm(createFormDto: CreateFormDto) {
    createFormDto.title = createFormDto.title.toLocaleLowerCase();
    createFormDto.subTitle = createFormDto.subTitle.toLocaleLowerCase();
    createFormDto.name = createFormDto.name.toLocaleLowerCase();
    createFormDto.email = createFormDto.email.toLocaleLowerCase();
    createFormDto.subject = createFormDto.subject.toLocaleLowerCase();
    createFormDto.message = createFormDto.message.toLocaleLowerCase();
    createFormDto.sendMessage = createFormDto.sendMessage.toLocaleLowerCase();

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

    if (updateFormDto.title) {
      updateFormDto.title = updateFormDto.title.toLowerCase();
    }
    if (updateFormDto.subTitle) {
      updateFormDto.subTitle = updateFormDto.subTitle.toLowerCase();
    }
    if (updateFormDto.name) {
      updateFormDto.name = updateFormDto.name.toLowerCase();
    }
    if (updateFormDto.email) {
      updateFormDto.email = updateFormDto.email.toLowerCase();
    }
    if (updateFormDto.subject) {
      updateFormDto.subject = updateFormDto.subject.toLowerCase();
    }
    if (updateFormDto.message) {
      updateFormDto.message = updateFormDto.message.toLowerCase();
    }
    if (updateFormDto.sendMessage) {
      updateFormDto.sendMessage = updateFormDto.sendMessage.toLowerCase();
    }
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
    createFooterDto.imageAdress =
      createFooterDto.imageAdress.toLocaleLowerCase();
    createFooterDto.adrese = createFooterDto.adrese.toLocaleLowerCase();
    createFooterDto.imageTel = createFooterDto.imageTel.toLocaleLowerCase();
    createFooterDto.numeroTel = createFooterDto.numeroTel.toLocaleLowerCase();
    createFooterDto.imageEmail = createFooterDto.imageEmail.toLocaleLowerCase();
    createFooterDto.email = createFooterDto.email.toLocaleLowerCase();
    createFooterDto.imageOne = createFooterDto.imageOne.toLocaleLowerCase();
    createFooterDto.imageTwo = createFooterDto.imageTwo.toLocaleLowerCase();
    createFooterDto.imageThree = createFooterDto.imageThree.toLocaleLowerCase();
    createFooterDto.imageFor = createFooterDto.imageFor.toLocaleLowerCase();
    createFooterDto.imageFive = createFooterDto.imageFive.toLocaleLowerCase();
    createFooterDto.imageSixt = createFooterDto.imageSixt.toLocaleLowerCase();
    createFooterDto.developedBy =
      createFooterDto.developedBy.toLocaleLowerCase();

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

    if (updateFooterDto.imageAdress) {
      updateFooterDto.imageAdress = updateFooterDto.imageAdress.toLowerCase();
    }
    if (updateFooterDto.adrese) {
      updateFooterDto.adrese = updateFooterDto.adrese.toLowerCase();
    }
    if (updateFooterDto.imageTel) {
      updateFooterDto.imageTel = updateFooterDto.imageTel.toLowerCase();
    }
    if (updateFooterDto.numeroTel) {
      updateFooterDto.numeroTel = updateFooterDto.numeroTel.toLowerCase();
    }
    if (updateFooterDto.imageEmail) {
      updateFooterDto.imageEmail = updateFooterDto.imageEmail.toLowerCase();
    }
    if (updateFooterDto.email) {
      updateFooterDto.email = updateFooterDto.email.toLowerCase();
    }
    if (updateFooterDto.imageOne) {
      updateFooterDto.imageOne = updateFooterDto.imageOne.toLowerCase();
    }
    if (updateFooterDto.imageTwo) {
      updateFooterDto.imageTwo = updateFooterDto.imageTwo.toLowerCase();
    }
    if (updateFooterDto.imageThree) {
      updateFooterDto.imageThree = updateFooterDto.imageThree.toLowerCase();
    }
    if (updateFooterDto.imageFor) {
      updateFooterDto.imageFor = updateFooterDto.imageFor.toLowerCase();
    }
    if (updateFooterDto.imageFive) {
      updateFooterDto.imageFive = updateFooterDto.imageFive.toLowerCase();
    }
    if (updateFooterDto.imageSixt) {
      updateFooterDto.imageSixt = updateFooterDto.imageSixt.toLowerCase();
    }
    if (updateFooterDto.developedBy) {
      updateFooterDto.developedBy = updateFooterDto.developedBy.toLowerCase();
    }
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
    createWorksDto.image = createWorksDto.image.toLocaleLowerCase();
    createWorksDto.date = createWorksDto.date.toLocaleLowerCase();
    createWorksDto.title = createWorksDto.title.toLocaleLowerCase();
    createWorksDto.description = createWorksDto.description.toLocaleLowerCase();
    createWorksDto.tags = createWorksDto.tags.toLocaleLowerCase();

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

    if (updateWorksDto.image) {
      updateWorksDto.image = updateWorksDto.image.toLowerCase();
    }
    if (updateWorksDto.date) {
      updateWorksDto.date = updateWorksDto.date.toLowerCase();
    }
    if (updateWorksDto.title) {
      updateWorksDto.title = updateWorksDto.title.toLowerCase();
    }
    if (updateWorksDto.description) {
      updateWorksDto.description = updateWorksDto.description.toLowerCase();
    }
    if (updateWorksDto.tags) {
      updateWorksDto.tags = updateWorksDto.tags.toLowerCase();
    }
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
  ////////////////////////////////////////////////
  // ***************Experience&&&&&&&&&&&&&&&&&&&&&&&&&
  ////////////////////////////////////
  async createExperience(createExperienceDto: CreateExperienceDto) {
    createExperienceDto.title = createExperienceDto.title.toLocaleLowerCase();
    createExperienceDto.subTitle =
      createExperienceDto.subTitle.toLocaleLowerCase();

    try {
      const experience = new this.experienceModel(createExperienceDto);
      const savedExperience = await experience.save();
      return savedExperience;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findExperience() {
    return this.experienceModel.findOne().populate('works').exec();
  }

  async findOneExperience(term: string) {
    let experiences: Experience;
    if (!isNaN(+term)) {
      experiences = await this.experienceModel
        .findOne({ no: term })
        .populate('works');
    }
    if (!experiences && isValidObjectId(term)) {
      experiences = await this.experienceModel.findById(term).populate('works');
    }
    if (!experiences) {
      experiences = await this.experienceModel
        .findOne({ title: term.toLowerCase().trim() })
        .populate('works');
    }
    if (!experiences)
      throw new NotFoundException(
        `experience with id, typeContenu or no ${term} not found`,
      );
    return experiences;
  }
  async updateExperience(
    term: string,
    updateExperienceDto: UpdateExperienceDto,
  ) {
    const experience = await this.findOneExperience(term);
    if (updateExperienceDto.title) {
      updateExperienceDto.title = updateExperienceDto.title.toLowerCase();
    }
    if (updateExperienceDto.subTitle) {
      updateExperienceDto.subTitle = updateExperienceDto.subTitle.toLowerCase();
    }
    try {
      const updatedExperience = await this.experienceModel.findByIdAndUpdate(
        experience._id,
        updateExperienceDto,
        { new: true },
      );
      if (!updatedExperience) {
        throw new NotFoundException(`Experience with id ${term} not found`);
      }
      return { ...experience.toJSON(), ...updateExperienceDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async removeExperience(id: string) {
    const { deletedCount } = await this.experienceModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`experience with id "${id}"not found`);
    return;
  }
  ////////////////////ADDWORKtoEXPERIENCE/////////////
  async addWorkToExperience(experienceId: string, workId: string) {
    const experience = await this.experienceModel.findById(experienceId);
    if (!experience) {
      throw new NotFoundException(
        `Experience with id ${experienceId} not found`,
      );
    }

    const work = await this.worksModel.findById(workId);
    if (!work) {
      throw new NotFoundException(`Work with id ${workId} not found`);
    }

    experience.works.push(work._id);
    await experience.save();
    return experience;
  }

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
