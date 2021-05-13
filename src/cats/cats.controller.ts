import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, UseFilters, UsePipes } from '@nestjs/common';
import { CreateDto } from 'src/create.dto';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from './http-exception.filter';
import { JoiValidationPipe } from './JoiValidationPipe.pipe';
import { ValidationPipe } from './validate.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  
  @Post()
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  async create(@Body() createDto:CreateDto){
      this.catsService.create(createDto);
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  
  async findAll():Promise<Cat[]>{
      throw new ForbiddenException();
          //   throw new HttpException('Forbidden',HttpStatus.FORBIDDEN);
      return this.catsService.findAll();
  }

  
}

