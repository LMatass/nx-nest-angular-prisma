import { Injectable } from '@nestjs/common';
import { CreateServerFeatureWorkItemDto } from './dto/create-server-feature-work-item.dto';
import { UpdateServerFeatureWorkItemDto } from './dto/update-server-feature-work-item.dto';
import { PrismaService } from '@nx-angular-nest-template/server/util-common';

@Injectable()
export class ServerFeatureWorkItemService {
  constructor(private prisma: PrismaService) {}

  create(createServerFeatureWorkItemDto: CreateServerFeatureWorkItemDto) {
    if (!createServerFeatureWorkItemDto.title) {
      throw new Error('Title is required');
    }

    if (!createServerFeatureWorkItemDto.status) {
      throw new Error('Status is required');
    }

    return this.prisma.workItem.create({
      data: createServerFeatureWorkItemDto,
    });
  }

  findAll() {
    return this.prisma.workItem.findMany();
  }

  update(
    id: number,
    updateServerFeatureWorkItemDto: UpdateServerFeatureWorkItemDto
  ) {
    return this.prisma.workItem.update({
      where: { id },
      data: updateServerFeatureWorkItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.workItem.delete({
      where: { id },
    });
  }
}
