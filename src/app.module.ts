import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { userModule } from './user/user.module';
import { Logmiddleware } from './middlewares/logger.middleware';
import { CountryModel } from './country/country.module';


@Module({
  imports: [userModule,CountryModel]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logmiddleware)
      .forRoutes({path:'users',method:RequestMethod.ALL},{path:'country',method:RequestMethod.ALL})
  }
}
