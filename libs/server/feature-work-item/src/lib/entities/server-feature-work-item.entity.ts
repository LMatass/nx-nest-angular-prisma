import { WorkItem } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@nx-angular-nest-template/server/core';

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

  @ApiProperty({ required: false, nullable: true })
  authorId!: number | null;

  @ApiProperty({ required: false, type: UserEntity })
  author!: UserEntity | null;
}
