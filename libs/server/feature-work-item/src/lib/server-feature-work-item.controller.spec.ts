import { Test, TestingModule } from '@nestjs/testing';
import { ServerFeatureWorkItemController } from './server-feature-work-item.controller';
import { ServerFeatureWorkItemService } from './server-feature-work-item.service';

describe('ServerFeatureWorkItemController', () => {
  let controller: ServerFeatureWorkItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerFeatureWorkItemController],
      providers: [ServerFeatureWorkItemService],
    }).compile();

    controller = module.get<ServerFeatureWorkItemController>(
      ServerFeatureWorkItemController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
