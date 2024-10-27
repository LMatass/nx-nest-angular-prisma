import { Injectable } from '@nestjs/common';
import { CreateServerFeatureWorkItemDto } from './dto/create-server-feature-work-item.dto';
import { UpdateServerFeatureWorkItemDto } from './dto/update-server-feature-work-item.dto';
import { PrismaService } from '@nx-angular-nest-template/server/util-common';

@Injectable()
export class ServerFeatureWorkItemService {
  constructor(private prisma: PrismaService) {}

  create(createServerFeatureWorkItemDto: CreateServerFeatureWorkItemDto) {
    return this.prisma.workItem.create({
      data: createServerFeatureWorkItemDto,
    });
  }

  findAll() {
    return this.prisma.workItem.findMany({
      include: {
        author: true,
      },
    });
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
