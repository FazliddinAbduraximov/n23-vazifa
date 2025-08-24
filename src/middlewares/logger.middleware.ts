import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class Logmiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        console.log('Middeware ishladi');
        next();
    }
}