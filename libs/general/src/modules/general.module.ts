import { Module } from '@nestjs/common';
import { CrudService } from '../services/crud.service';

@Module({
  controllers: [],
  providers: [CrudService],
  exports: [],
})
export class GeneralModule {}
