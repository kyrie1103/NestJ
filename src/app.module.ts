import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController} from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { logger, LoggerMiddleware } from './logger.middleware';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, HelloController],
  providers: [AppService, CatsService, HelloService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes({path: 'cats' , method: RequestMethod.GET},{path: 'cats', method: RequestMethod.POST})
  }
  
}
