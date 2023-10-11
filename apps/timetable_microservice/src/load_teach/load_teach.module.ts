import { Module } from '@nestjs/common';
import { LoadTeachController } from './load_teach.controller';
import { LoadTeachService } from './load_teach.service';

@Module({
  controllers: [LoadTeachController],
  providers: [LoadTeachService]
})
export class LoadTeachModule {}
