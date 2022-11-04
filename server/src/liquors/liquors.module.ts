import { Module } from '@nestjs/common';
import { LiquorsController } from './liquors.controller';
import { LiquorsService } from './liquors.service';

@Module({
  controllers: [LiquorsController],
  providers: [LiquorsService]
})
export class LiquorsModule {}
