import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';

async function start() {
  const app = await NestFactory.create(UserModule);
  await app.listen(process.env.PORT ?? 3000,()=>console.log('Server started...'));
}
start();
