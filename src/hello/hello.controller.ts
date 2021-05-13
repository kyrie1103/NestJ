import {
  Controller,
  Get,
  Query,
  Headers,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  //查询
  @Get()
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }

  //创建
  @Post()
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }

  //更新
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  //删除
  @Delete()
  remove(@Query() { id }) {
    return this.helloService.remove(id);
  }
}
