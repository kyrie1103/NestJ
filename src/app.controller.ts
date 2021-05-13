import { Body, Controller, Get, HttpStatus, Param, Post, Query, Redirect, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateDto } from './create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

//   @Get(':id')
//  getHello(@Param('id') id): string {
//     console.log(parseInt(id)+1);
//     return this.appService.getHello();
//   }

@Get()
findAll(@Res() res: Response) {
   res.status(HttpStatus.OK).json([]);
}

  @Get('query')
  getUserinfo(@Query() query): string{
      console.log(query);
      return `aaaaaa${query.id}`;
  }

  @Post('userinfo')
  create (@Body() createDto: CreateDto){
    console.log(createDto);
    return "hello world"
  }


}
