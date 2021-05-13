import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log('request.......')
        next();
    }

}
export function logger(req,res,next){
    console.log(`qqqqqq`);
    next();
}