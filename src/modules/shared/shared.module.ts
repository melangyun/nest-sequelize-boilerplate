import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { ConfigModule } from '@nestjs/config';
@Global()
@Module({
    providers: [ConfigService],
    exports: [ConfigService],
    imports: [ ConfigModule.forRoot({ envFilePath: '.env' }),],
    controllers: [],
})
export class SharedModule {}
