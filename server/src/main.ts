import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
async function bootstrap() {
  const port = parseInt(process.env.PORT) || 7000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(port, () => {
    console.log(`❤️  TaskManger running : http://localhost:${port} -------> Now :${new Date()}`);
  });
}
bootstrap();
