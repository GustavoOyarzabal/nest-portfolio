import { Portfolios } from './entities/portfolio.entity';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { PaginationDto } from 'src/common/dto/Paginationdto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PortfoliosService {
  private defaultLimit: number;
  constructor(
    @InjectModel(Portfolios.name)
    private readonly portfoliosModel: Model<Portfolios>,
    private readonly configService: ConfigService,
  ) {
    // console.log(process.env.DEFAULT_LIMIT);
    // console.log(configService.get('defaultLimit'));
    this.defaultLimit = configService.get<number>('defaultLimit');
  }
  async create(createPortfolioDto: CreatePortfolioDto) {
    createPortfolioDto.typeContenu =
      createPortfolioDto.typeContenu.toLocaleLowerCase();
    try {
      const portfolios = await this.portfoliosModel.create(createPortfolioDto);
      return portfolios;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  // async findAllPortfolios(): Promise<Portfolios[]> {
  //   return this.portfoliosModel.find().limit(2);
  // }
  async findAllPortfolios(paginationDto: PaginationDto) {
    // console.log(+process.env.DEFAULT_LIMIT);
    // const { limit = +process.env.DEFAULT_LIMIT, offset = 0 } = paginationDto;
    const { limit = this.defaultLimit, offset = 0 } = paginationDto;

    return this.portfoliosModel
      .find()
      .limit(limit)
      .skip(offset)
      .sort({ no: 1 })
      .select(`-__v`)
      .exec();
  }

  async findOne(term: string) {
    let portfolios: Portfolios;
    if (!isNaN(+term)) {
      portfolios = await this.portfoliosModel.findOne({ no: term });
    }
    if (!portfolios && isValidObjectId(term)) {
      portfolios = await this.portfoliosModel.findById(term);
    }
    if (!portfolios) {
      portfolios = await this.portfoliosModel.findOne({
        typeContenu: term.toLowerCase().trim(),
      });
    }
    if (!portfolios)
      throw new NotFoundException(
        `Portfolio with id, typeContenu or no ${term} not fund`,
      );
    return portfolios;
  }

  async update(term: string, updatePortfolioDto: UpdatePortfolioDto) {
    const portfolios = await this.findOne(term);
    if (updatePortfolioDto.typeContenu)
      updatePortfolioDto.typeContenu =
        updatePortfolioDto.typeContenu.toLowerCase();
    try {
      await portfolios.updateOne(updatePortfolioDto);
      return { ...portfolios.toJSON(), ...updatePortfolioDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }
  async remove(id: string) {
    // const Portfolios = await this.findOne(id);
    // await Portfolios.deleteOne();
    // const result = await this.portfoliosModel.findByIdAndDelete(id);
    //el siguiente codigo tambien me funcionaba pero lo cambie para usar el deletedCount:
    // const result = await this.portfoliosModel.deleteOne({ _id: id });
    // return result;
    const { deletedCount } = await this.portfoliosModel.deleteOne({ _id: id });
    if (deletedCount == 0)
      throw new BadRequestException(`Portfolio with id "${id}"not found`);
    return;
  }
  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Portfolio exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can´t create Portfolio - Check server logs`,
    );
  }
}
