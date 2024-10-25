import { Test, TestingModule } from '@nestjs/testing';
import { ServerFeatureWorkItemService } from './server-feature-work-item.service';

describe('ServerFeatureWorkItemService', () => {
  let service: ServerFeatureWorkItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerFeatureWorkItemService],
    }).compile();

    service = module.get<ServerFeatureWorkItemService>(
      ServerFeatureWorkItemService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
