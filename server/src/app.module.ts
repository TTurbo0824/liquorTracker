import { Module } from "@nestjs/common";
import { LiquorsModule } from './liquors/liquors.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [LiquorsModule, BoardsModule],
})
export class AppModule {}
