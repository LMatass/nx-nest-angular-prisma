import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureWorkItemModule } from '@nx-angular-nest-template/server/feature-work-item';

@Module({
  imports: [ServerFeatureWorkItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
