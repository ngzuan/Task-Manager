import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RequestContextMiddleware } from './middlewares/request-context.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { buildDatabaseConnectionOptions } from './config/orm.config';
import { ProjectModule } from './modules/project.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "../.env"
    }),
    TypeOrmModule.forRoot(buildDatabaseConnectionOptions()),
    ProjectModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}