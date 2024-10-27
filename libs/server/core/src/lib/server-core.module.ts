import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [UsersModule, AuthModule],
})
export class ServerCoreModule {}
