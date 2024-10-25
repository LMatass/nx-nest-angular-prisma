import { PartialType } from '@nestjs/swagger';
import { CreateServerFeatureWorkItemDto } from './create-server-feature-work-item.dto';

export class UpdateServerFeatureWorkItemDto extends PartialType(
  CreateServerFeatureWorkItemDto
) {}
