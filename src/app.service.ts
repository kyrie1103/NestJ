import { Injectable, Req } from '@nestjs/common';
import { Cat } from './cats/cat.interface';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

}
