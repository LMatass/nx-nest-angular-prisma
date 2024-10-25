import { WorkItem } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ServerFeatureWorkItem implements WorkItem {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  title!: string;

  @ApiProperty({ required: false })
  description!: string;

  @ApiProperty()
  status!: string;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
