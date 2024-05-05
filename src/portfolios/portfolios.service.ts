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

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectModel(Portfolios.name)
    private readonly portfoliosModel: Model<Portfolios>,
  ) {}
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

  async findAll() {
    return Portfolios;
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
