import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // for( let i = 0 ; i < 3 ; i++ ){
  // //let i = 'abc'　　　　//用var替代let会报错提示已经定义，若没有任何关键字则每次赋值给i，最后只会输出一次abc
  // console.log(i) 　　 // 输出3次abc  
// }
}

bootstrap();    
