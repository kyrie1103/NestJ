import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
    console.log(this.cats);
  }
  findAll(): Cat[] {
    return this.cats;
    
  }
}
