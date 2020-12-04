import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { GeneralModule } from 'libs/general/src/modules/general.module'
@Module({
  imports: [UserModule, GeneralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
