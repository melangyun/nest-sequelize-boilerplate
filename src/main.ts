import { NestFactory } from '@nestjs/core';
import { init as SentryInit } from '@sentry/node';
import { AppModule } from './modules/app.module';
import { LoggingInterceptor } from './logging.interceptor';
// import { ValidationPipe } from '@nestjs/common';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configEnv = process.env.CONFIG_ENV;
  // app.useGlobalPipes(new ValidationPipe());
  SentryInit({
    dsn: configEnv ? process.env.SENTRY_DNS : '',
  });
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
