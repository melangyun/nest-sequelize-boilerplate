import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './config/config.service';
@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [],
})
export class SharedModule {}
