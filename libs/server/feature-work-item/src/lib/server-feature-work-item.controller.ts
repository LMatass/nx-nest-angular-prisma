import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServerFeatureWorkItemService } from './server-feature-work-item.service';
import { CreateServerFeatureWorkItemDto } from './dto/create-server-feature-work-item.dto';
import { UpdateServerFeatureWorkItemDto } from './dto/update-server-feature-work-item.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ServerFeatureWorkItem } from './entities/server-feature-work-item.entity';

@Controller('server-feature-work-item')
@ApiTags('work-items')
export class ServerFeatureWorkItemController {
  constructor(
    private readonly serverFeatureWorkItemService: ServerFeatureWorkItemService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ServerFeatureWorkItem })
  create(
    @Body() createServerFeatureWorkItemDto: CreateServerFeatureWorkItemDto
  ) {
    return this.serverFeatureWorkItemService.create(
      createServerFeatureWorkItemDto
    );
  }

  @Get()
  @ApiOkResponse({ type: [ServerFeatureWorkItem] })
  findAll() {
    return this.serverFeatureWorkItemService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServerFeatureWorkItemDto: UpdateServerFeatureWorkItemDto
  ) {
    return this.serverFeatureWorkItemService.update(
      +id,
      updateServerFeatureWorkItemDto
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: ServerFeatureWorkItem })
  remove(@Param('id') id: string) {
    return this.serverFeatureWorkItemService.remove(+id);
  }
}
