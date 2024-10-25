import { ApiProperty } from '@nestjs/swagger';

export class CreateServerFeatureWorkItemDto {
  @ApiProperty()
  title!: string;

  @ApiProperty({ required: false })
  description!: string;

  @ApiProperty()
  status!: string;
}
