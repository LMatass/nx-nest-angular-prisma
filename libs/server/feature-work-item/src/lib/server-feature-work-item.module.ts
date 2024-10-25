import { Module } from '@nestjs/common';
import { ServerFeatureWorkItemService } from './server-feature-work-item.service';
import { ServerFeatureWorkItemController } from './server-feature-work-item.controller';
import { PrismaModule } from '@nx-angular-nest-template/server/util-common';
@Module({
  controllers: [ServerFeatureWorkItemController],
  providers: [ServerFeatureWorkItemService],
  imports: [PrismaModule],
  exports: [ServerFeatureWorkItemService],
})
export class ServerFeatureWorkItemModule {}
