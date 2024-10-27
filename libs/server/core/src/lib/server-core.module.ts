import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [UsersModule],
})
export class ServerCoreModule {}
